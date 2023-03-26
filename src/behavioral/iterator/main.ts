import { Habit, originalHabits } from "../../shared/models/Habit";
import { HabitsCollection } from "./ConcreteCollection"
import { IteratorInterface } from "./Iterator";

const main = () => {
    let habits: Habit[] = originalHabits;
    let habitsCollection: HabitsCollection = new HabitsCollection(habits);

    let iterator: IteratorInterface = habitsCollection.createIterator("difficulty");

    while (iterator.hasMore()) {
        let habit: Habit = iterator.getNext();
        console.log("habit: ", habit);
    }

    console.log("no more habits");
}

main();