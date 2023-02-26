import { Car } from "./Car";
import { CarBuilder } from "./CarBuilder";

export class FerrariBuilder implements CarBuilder {
    private car: Car = new Car();

    reset(): void {
        this.car = new Car();
    }

    setBrand(): void {
        this.car.brand = "Ferrari";
    }

    setHasAutoDrive(): void {
        this.car.hasAutoDrive = true;
    }

    setSpeed(): void {
        this.car.speed = 300;
    }

    setColor(): void {
        this.car.color = "red";
    }

    createCar(): Car {
        // ! Why is this result not overwritten? Because of constant?
        let result: Car = this.car;
        this.reset();
        return result;
    }
}