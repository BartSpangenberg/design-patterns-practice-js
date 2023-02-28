import { Challenge } from "./Challenge";

export interface CompleteChallengeInterface {
    completeChallenge({ challenge }: { challenge: Challenge }): void;
}
