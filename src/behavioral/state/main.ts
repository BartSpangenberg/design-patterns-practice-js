import { HabitScreen } from "./HabitScreen";
import { HabitScreenState, HabitLoadingState, HabitSettingsState, HabitDefaultState, HabitCompletedState } from "./HabitState";

const main = () => {

    let loadingState: HabitScreenState = new HabitLoadingState();
    let habitScreen: HabitScreen = new HabitScreen(loadingState);

    habitScreen.takeALookAtTheScreen();

    let habitSettingsState: HabitScreenState = new HabitSettingsState();
    habitScreen.changeState(habitSettingsState);

    habitScreen.takeALookAtTheScreen();

    let habitDefaultState: HabitScreenState = new HabitDefaultState();

    habitScreen.changeState(habitDefaultState);
    habitScreen.takeALookAtTheScreen();
    habitScreen.onCompleteHabit();

    let habitCompletedState: HabitScreenState = new HabitCompletedState();

    habitScreen.changeState(habitCompletedState);
    habitScreen.takeALookAtTheScreen();
    habitScreen.onCompleteHabit();
}

main();