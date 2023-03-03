import { Actitivy } from "./Activity";

// *This is called the abstraction
export class ActivityManager {
    protected activity: Actitivy;
    protected totalPoints: number = 0;

    constructor({ activity }: { activity: Actitivy }) {
        this.activity = activity;
    }

    changeActivity({ activity }: { activity: Actitivy }) {
        this.activity = activity;
    }

    getPoints(): number {
        let points: number = this.activity.finish();
        this.totalPoints += points;
        return points;
    };

    getTotalPoints(): void {
        console.log("Total points earned: ", this.totalPoints);
    }
}