import { Car } from "./Car";
import { CarBuilder } from "./CarBuilder";

export class TeslaBuilder implements CarBuilder {
    private car: Car = new Car();

    reset(): void {
        this.car = new Car();
    }

    setBrand(): void {
        this.car.brand = "Tesla";
    }

    setHasAutoDrive(): void {
        this.car.hasAutoDrive = true;
    }

    setSpeed(): void {
        this.car.speed = 250;
    }

    setColor(): void {
        this.car.color = "black";
    }

    createCar(): Car {
        // ! Why is this result not overwritten? Because of constant?
        const result: Car = this.car;
        this.reset();
        return result;
    }
}