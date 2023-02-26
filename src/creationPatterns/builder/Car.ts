// *Abstract car class
export class Car {
    brand: string = "unknown";
    color: string = "";
    speed: number = 0;
    hasAutoDrive: boolean = false;

    showCaseCar() {
        console.log(`This is a ${this.color} ${this.brand} ${this.hasAutoDrive ? "with" : "without"} auto-drive, can make speed of ${this.speed} km/h.`)
    }
}