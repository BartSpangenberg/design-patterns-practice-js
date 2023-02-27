import { CarBuilder } from "./CarBuilder";

export class CarDirector {

    // ! A better way to use the builder would be to store the Builder in a private variable
    // -- set the builder with a setbuilder method
    // -- Then you can create different products such as Cars, Manuals for different kinds of Cars with 1 Director

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