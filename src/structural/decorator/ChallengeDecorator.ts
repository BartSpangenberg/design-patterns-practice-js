import { Challenge } from "./Challenge";
import { CompleteChallengeInterface } from "./CompleteChallengeInterface";

// The main difference between private and protected is that 
// private members can only be accessed within the class where they are defined, 
// while protected members can be accessed within the class and its subclasses.

export class ChallengeDecorator implements CompleteChallengeInterface {
    protected decorator: CompleteChallengeInterface;

    constructor(decorator: CompleteChallengeInterface) {
        this.decorator = decorator;
    }

    completeChallenge({ challenge }: { challenge: Challenge; }): void {
        this.decorator.completeChallenge({ challenge: challenge })
    };
}