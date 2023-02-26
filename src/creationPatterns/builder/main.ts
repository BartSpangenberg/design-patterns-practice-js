import { Car } from "./Car";
import { CarDirector } from "./CarDirector";
import { FerrariBuilder } from "./FerrariBuilder";
import { TeslaBuilder } from "./TeslaBuilder";

const main = (): void => {
    let teslaBuilder: TeslaBuilder = new TeslaBuilder();
    let ferrariBuilder: FerrariBuilder = new FerrariBuilder();

    let carDirector: CarDirector = new CarDirector();

    carDirector.buildTesla({ builder: teslaBuilder });
    carDirector.buildFerrari({ builder: ferrariBuilder });

    let tesla: Car = teslaBuilder.createCar();
    let ferrari: Car = ferrariBuilder.createCar();

    carDirector.buildFerrariWithAutoDrive({ builder: ferrariBuilder });
    let ferrariWithAutoDrive: Car = ferrariBuilder.createCar();

    tesla.showCaseCar()
    ferrari.showCaseCar();
    ferrariWithAutoDrive.showCaseCar();
}

main();