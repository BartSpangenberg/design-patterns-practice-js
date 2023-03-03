import { ActivityManager } from "./ActitivyManager";

// * For certain usecase you might want to add functionality to the Abstraction
// You can do thas by using inheritance (extends) on the Abstraction
export class EnhancedActivityManager extends ActivityManager {
    getDoublePoints() {
        let points: number = this.activity.finish() * 2;
        this.totalPoints += points;
        return points;
    }
}