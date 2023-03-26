import { Habit } from "../../shared/models/Habit";
import { DifficultyIterator } from "./ConcreteIterator";
import { IterableCollectionInterface } from "./IterableCollection";
import { IteratorInterface } from "./Iterator";

export class HabitsCollection implements IterableCollectionInterface {
    habits: Habit[];

    constructor(habits: Habit[]) {
        this.habits = habits;
    }

    createIterator(type: string): IteratorInterface {
        if (type === "difficulty") {
            return new DifficultyIterator(this);
        }
        return new DifficultyIterator(this);
    }

    getItems(): any[] {
        return this.habits;
    }
}