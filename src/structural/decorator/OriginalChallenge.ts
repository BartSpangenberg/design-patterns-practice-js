import { Challenge } from "./Challenge";
import { CompleteChallengeInterface } from "./CompleteChallengeInterface";
import { userId } from "./main";

// *This is the original challenge, the first behavior that the app started with
export class ChallengeCompleter implements CompleteChallengeInterface {
    completeChallenge({ challenge }: { challenge: Challenge }): void {
        console.log(`User with userId:${userId} has received ${challenge.points} for challenge with id: ${challenge.id}`);
    }
}