import { MonsterFlyweight } from "./MonsterFlyweight";

export class MonsterFlyweightFactory {
    // *Save already created flyweights
    private flyweights: MonsterFlyweight[] = [];

    // *You can initialize the factory with existing types (flyweights), this is not done for simplicity
    constructor() { }

    // *getFlyweight
    public getFlyweight(color: string): MonsterFlyweight {
        // The way to identify the flyweight can vary per usecase, in this case a simple color property is added to each flyweight, we assume that this is the entire flyweight
        // For more complex scenario's you need to serialize each flyweight into a specific key

        let flyweight: MonsterFlyweight | undefined = this.flyweights.find((flyweight) => flyweight.color === color)

        if (flyweight !== undefined) {
            console.log("Return existing flyweight");
            return flyweight;
        }

        let newFlyweight: MonsterFlyweight = new MonsterFlyweight(color);
        this.flyweights.push(newFlyweight);

        console.log("Return new flyweight");
        return newFlyweight;
    }

}