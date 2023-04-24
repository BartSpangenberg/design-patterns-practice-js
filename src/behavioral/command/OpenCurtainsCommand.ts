import { Curtains } from "./Curtains";

export class OpenCurtainsCommand {
    private curtains: Curtains;

    public constructor(curtains: Curtains) {
        this.curtains = curtains;
    }

    execute(): void {
        this.curtains.openCurtains();
    }
}