import { ChallengeDecorator } from "./ChallengeDecorator";
import { Challenge } from "./Challenge";
import { listCheatingUsers, userId } from "./main";

export class CheatChecker extends ChallengeDecorator {
    completeChallenge({ challenge }: { challenge: Challenge; }): void {
        let userIsCheating: boolean = listCheatingUsers.includes(userId);

        if (userIsCheating) {
            challenge.points = 0;
            console.log("User is cheating, points have been reduced to 0.");
        } else {
            console.log("User is not cheating, points remain unchanged.");
        }
    }
}