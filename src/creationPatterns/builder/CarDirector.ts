import { CarBuilder } from "./CarBuilder";

export class CarDirector {
    buildTesla({ builder }: {
        builder: CarBuilder
    }): void {
        builder.setBrand();
        builder.setHasAutoDrive();
        builder.setColor();
        builder.setSpeed();
    }

    buildFerrari({ builder }: {
        builder: CarBuilder
    }): void {
        builder.setBrand();
        builder.setColor();
        builder.setSpeed();
    }

    buildFerrariWithAutoDrive({ builder }: {
        builder: CarBuilder
    }): void {
        builder.setBrand();
        builder.setColor();
        builder.setSpeed();
        builder.setHasAutoDrive();
    }
}