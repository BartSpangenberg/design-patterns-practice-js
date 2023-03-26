import { MonsterFlyweight } from "./MonsterFlyweight";

export class Monster {
    speed: number;
    x: number;
    y: number;
    flyweight: MonsterFlyweight;

    constructor({ speed, x, y, flyweight }: {
        speed: number,
        x: number,
        y: number,
        flyweight: MonsterFlyweight
    }) {
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.flyweight = flyweight;
    }
}