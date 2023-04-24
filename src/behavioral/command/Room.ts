import { Command } from "./Command";

/* 
    INVOKER

    Boiler plate for Command pattern.

    Can be customized to how commands are executed. 
    -- Store multiple commands
    -- Save / undo commands
    -- Scheduling commands in future etc.
*/

export class Room {
    private command: Command | undefined;

    public constructor() { }

    public setCommand(command: Command): void {
        this.command = command;
    }

    public executeCommand() {
        this.command?.execute();
    }
}