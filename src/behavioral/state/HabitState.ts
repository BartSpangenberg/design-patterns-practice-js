export interface HabitScreenState {
    isCompleted: boolean;

    showScreen(): void;
    pressCompleteButton(): void;
}

export class HabitLoadingState implements HabitScreenState {
    isCompleted: boolean = false;

    showScreen(): void {
        console.log("Show loading spinner");
    }

    pressCompleteButton(): void { }
}

export class HabitSettingsState implements HabitScreenState {
    isCompleted: boolean = false;

    showScreen(): void {
        console.log("Show settings screen");
    }

    pressCompleteButton(): void { }
}

export class HabitDefaultState implements HabitScreenState {
    isCompleted: boolean = false;

    showScreen(): void {
        console.log("Show screen where you can complete a habit.");
    }

    pressCompleteButton(): void {
        console.log("API call made to complete the habit");
    }
}

export class HabitCompletedState implements HabitScreenState {
    isCompleted: boolean = true;

    showScreen(): void {
        console.log("Show screen where you can complete a habit, habit is completed.");
    }

    pressCompleteButton(): void {
        console.log("API call made to decomplete the habit");
    }
}

