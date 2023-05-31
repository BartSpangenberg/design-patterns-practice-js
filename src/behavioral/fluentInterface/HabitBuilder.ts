import { Habit } from "./Habit";

export class HabitBuilder {
    private habit: Habit = new Habit("", false);

    reset() {
        this.habit = new Habit("", false);
    }

    addName(name: string): HabitBuilder {
        this.habit.name = name;
        return this;
    }

    setIsNegative(): HabitBuilder {
        this.habit.isNegative = true;
        return this;
    }

    get() {
        return this.habit;
    }
}