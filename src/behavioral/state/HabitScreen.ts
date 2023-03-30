import { HabitScreenState } from "./HabitState";

export class HabitScreen {
    private state: HabitScreenState;

    constructor(initialState: HabitScreenState) {
        this.state = initialState;
    }

    changeState(state: HabitScreenState) {
        this.state = state;
    }

    takeALookAtTheScreen(): void {
        this.state.showScreen();
    }

    onCompleteHabit(): void {
        this.state.pressCompleteButton();
    }
}