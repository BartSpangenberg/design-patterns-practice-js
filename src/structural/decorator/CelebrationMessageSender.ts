import { ChallengeDecorator } from "./ChallengeDecorator";
import { Challenge } from "./Challenge";
import { userId } from "./main";

export class CelebrationMessageSender extends ChallengeDecorator {
    completeChallenge({ challenge }: { challenge: Challenge; }): void {
        if (challenge.points > 0) {
            console.log(`Congratulations ${userId} you have earned ${challenge.points}!!`)
        }
    }
}