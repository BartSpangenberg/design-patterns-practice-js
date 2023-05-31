export class Habit {
    name: string;
    timesCompleted: number = 0;
    isNegative: boolean;

    constructor(name: string, isNegative: boolean) {
        this.name = name;
        this.isNegative = isNegative;
    }

    showHabit() {
        console.log("Name: ", name, "Times completed: ", this.timesCompleted, "Is negative: ", this.isNegative);
    }
}