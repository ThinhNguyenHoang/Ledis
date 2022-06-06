import Prompter from "./Prompter";
import './Terminal.less';
import {useAppDispatch, useAppSelector} from "../../hooks/redux/hooks";
import {
    clearUserInputError,
    TerminalCommand,
    terminalSelector,
    terminalSlice
} from "../../redux/features/Terminal/TerminalSlice";
import CommandItem from "./CommandItem/CommandItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import {useTestEndpointQuery} from "../../redux/features/Terminal/TerminalApi";
import {useEffect, useRef} from "react";

// const testCommands: TerminalCommand[] = [
//     {
//         command: "SET age 12",
//         result: `1) "age"`
//     },
//     {
//         command: "GET age",
//         result: `1) "12"`
//     },
//     {
//         command: "LPUSH age 1 2 3",
//         result: `1) age`
//     },
//     {
//         command: "GET age",
//         result: `"1 2 3 jkld asdf asdfasdf asdf asd fsad fasdf asdf sdf sadfas fsad"`
//     },
// ]
const Terminal = () => {
    // Redux Hooks
    const dispatch = useAppDispatch();

    const commandLogs = useAppSelector(terminalSelector.selectCommands);
    const userInputError = useAppSelector(terminalSelector.selectUserInputError);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [commandLogs])
    return (
        <div className={"TerminalContainer"}>
            <div className={"TerminalDisplay"} ref={ref}>
                {
                    commandLogs.map((item, index) => {
                        return <CommandItem {...item} key={index}/>
                    })
                }
            </div>
            <Prompter/>
            {userInputError && <div className={"UserInputErrorContainer"}>
                <span className={"UserInputErrorText"}>
                {userInputError}
                </span>
                <FontAwesomeIcon className={"DeleteIcon"} icon={faCircleXmark} onClick={() => {
                    dispatch(clearUserInputError());
                }
                }/>
            </div>}
        </div>
    )
}

export default Terminal;