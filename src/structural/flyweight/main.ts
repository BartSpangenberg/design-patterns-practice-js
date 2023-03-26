import { Monster } from "./Monster";
import { MonsterFlyweight } from "./MonsterFlyweight";
import { MonsterFlyweightFactory } from "./MonsterFlyweightFactory";

const main = () => {
    let flyweightFactor: MonsterFlyweightFactory = new MonsterFlyweightFactory();

    let greenFlyweight: MonsterFlyweight = flyweightFactor.getFlyweight("green");
    let greenFlyweight2: MonsterFlyweight = flyweightFactor.getFlyweight("green");
    let redFlyweight: MonsterFlyweight = flyweightFactor.getFlyweight("red");

    // *In this example the flyweight pattern can be extended with another creational pattern such as builder, factory-method or abstract factory 
    // In those creational patterns a MonsterFactory could make use of the FlyweightFactory
    let greenMonster: Monster = new Monster({
        speed: 100,
        x: 0,
        y: 0,
        flyweight: greenFlyweight,
    });
    let greenerMonster: Monster = new Monster({
        speed: 100,
        x: 0,
        y: 0,
        flyweight: greenFlyweight2,
    });
    let redMonster: Monster = new Monster({
        speed: 100,
        x: 0,
        y: 0,
        flyweight: redFlyweight,
    });
}

main();