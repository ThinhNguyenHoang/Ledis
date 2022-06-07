import {useCallback, useRef, useState} from "react";
import {
    addNewCommand,
    clearCommandLogs,
    commandValidatorsMap,
    setUserInputError,
    terminalSlice
} from "../../redux/features/Terminal/TerminalSlice";
import {useAppDispatch} from "../../hooks/redux/hooks";
import {useExecuteCommandMutation} from "../../redux/features/Terminal/TerminalApi";
import Button from "../Button/Button";


const Prompter = () => {
    const [command, setCommand] = useState("");
    const dispatch = useAppDispatch();
    const [executeCommand, result] = useExecuteCommandMutation();

    const handleSubmit = () => {
        // * Sanitizing the input before sending the command to backend
        const commandName = command.trim().split(" ")?.[0];
        // @ts-ignore
        const commandValidator = commandValidatorsMap[commandName];
        if (!commandValidator) {
            dispatch(setUserInputError("Invalid Command. Check the docs for available commands"));
        } else if (!commandValidator(command)) {
            dispatch(setUserInputError(`Invalid Parameter (s). Please check the docs for more information on how to use Command ${commandName}`))
        }
        // * Every thing is syntactically valid, now we can send the command to backend
        else {
            if (command === "CLEAR") {
                dispatch(clearCommandLogs());
                return;
            }
            executeCommand(command).unwrap()
                .then(res => {
                    dispatch(addNewCommand({command, result: res, isError: false}))
                    setCommand("");
                })
                .catch(err => {
                    console.log("Error executing command : ", err);
                    dispatch(addNewCommand({command, result: err.data.message, isError: true}));
                });
        }
    }
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.code) {
            case "ArrowUp":
                console.log("Arrow Up Pressed");
                return;
            case "Enter":
                handleSubmit();
                return;
        }
    }

    return (
        <div className={"Prompter"}>
            <span id="PromptLabel"> {">"} </span>
            <input id={"PromptInput"} type="text" placeholder="" value={command}
                   onChange={(e) => setCommand(e.target.value.toUpperCase())}
                   onKeyDown={handleKeyPress}
            />
            <Button id={"CommandSendButton"} title={"SEND"} onClick={() => {
                handleSubmit();
            }}>
            </Button>
        </div>
    )
}

export default Prompter;