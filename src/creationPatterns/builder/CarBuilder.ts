import { Car } from "./Car"

// *Abstract Car builder
export interface CarBuilder {

    // TODO: implement
    reset(): void

    // TODO: implement
    setBrand(): void

    // TODO: implement
    setHasAutoDrive(): void

    // TODO: implement
    setSpeed(): void

    // TODO: implement
    setColor(): void

    // TODO: implement
    createCar(): Car
}