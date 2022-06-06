import {TerminalCommand} from "../../../redux/features/Terminal/TerminalSlice";
import React from "react";
import './CommandItem.less';

const CommandItem = ({command, result}: TerminalCommand) => {
    const splitCommand = command.split(" ");
    const commandName = splitCommand.slice(0, 1);
    const commandParams = splitCommand.slice(1);
    return (
        <div className={"CommandItemContainer"}>
            <div className={"CommandItem"}>
                <span className={"CommandCaret"}>
                    {"> "}
                </span>
                <div className={"Command"}>
                    <span className={"CommandName"}>
                        {commandName + " "}
                    </span>
                    <span className={"CommandParameters"}>
                        {commandParams.join(" ")}
                    </span>
                </div>
            </div>
            <div className={"CommandResult"}>
                {
                    result
                }
            </div>
        </div>
    )
}

export default React.memo(CommandItem);