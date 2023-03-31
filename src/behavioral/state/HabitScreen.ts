import { HabitScreenState } from "./HabitState";

// Context
export class HabitScreen {
    private state: HabitScreenState;

    constructor(initialState: HabitScreenState) {
        this.state = initialState;
    }

    changeState(state: HabitScreenState) {
        this.state = state;
    }

    takeALookAtTheScreen(): void {
        // This is a critical part of the pattern, the Context delegating the work tot the State
        this.state.showScreen();
    }

    onCompleteHabit(): void {
        this.state.pressCompleteButton();
    }
}