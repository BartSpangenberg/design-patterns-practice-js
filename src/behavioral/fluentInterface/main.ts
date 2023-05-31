import { Habit } from "./Habit";
import { HabitBuilder } from "./HabitBuilder";

const main = () => {
    const habitBuilder: HabitBuilder = new HabitBuilder();
    const smokingHabit: Habit = habitBuilder.addName("Quit smoking").setIsNegative().get();
    habitBuilder.reset();
    const meditationHabit: Habit = habitBuilder.addName("Meditate>").get();
    console.log("Habit 1: ", smokingHabit);
    console.log("Habit 2: ", meditationHabit);
}

main();