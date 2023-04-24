import { Command } from "./Command";
import { Light } from "./Light";

export class LightSwitchCommand implements Command {
    private light: Light;

    public constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.switchLights();
    }
}