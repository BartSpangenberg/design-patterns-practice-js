import { Challenge } from "./Challenge";
import { CheatChecker } from "./CheatChecker";
import { CelebrationMessageSender } from "./CelebrationMessageSender";
import { ChallengeCompleter } from "./OriginalChallenge";

export const userId: string = "userId02392";
export const listCheatingUsers: string[] = ["userId02392", "userId12931"];

const main = () => {
    let challenge: Challenge = new Challenge({
        id: "challengeId12435",
        points: 10,
    });

    // *Basebehavior
    let challengeCompletor: ChallengeCompleter = new ChallengeCompleter();

    // *Later extended behaviour 1
    let cheatChecker: CheatChecker = new CheatChecker(challengeCompletor);
    cheatChecker.completeChallenge({ challenge: challenge });
    challengeCompletor.completeChallenge({ challenge: challenge });

    // *Later extended behaviour 2
    let celebrator: CelebrationMessageSender = new CelebrationMessageSender(cheatChecker);
    celebrator.completeChallenge({ challenge: challenge });
}

main();