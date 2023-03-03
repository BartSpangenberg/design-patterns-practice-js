// Bridge Pattern analysis
// Abstraction (ConcreteClass) has instance variable of type Implementation (AbstractClass)
// Polymorfism exists for Implementation class, every ConcreteImplementation uses inhertance 
// Abstraction calls methods on Implementation 
// Abstraction can be extended by using an EnhancedAbstraction, this allow to add functionality to Abstraction

import { ActivityManager } from "./ActitivyManager";
import { Actitivy } from "./Activity";
import { BasicActivity } from "./BasicActivity";
import { EnhancedActivityManager } from "./EnhancedActivityManager";
import { GpsActivity } from "./GpsActivity";

const main = (): void => {
    let basicActivity: Actitivy = new BasicActivity({
        "points": 5,
    });
    let gpsActivity: Actitivy = new GpsActivity({
        "pointsPerMeter": 0.001,
        "metersWalked": 7000,
    });

    let activityManager: ActivityManager = new ActivityManager({ activity: basicActivity })
    let pointsEarnedChallengeOne: number = activityManager.getPoints();
    console.log("1:", pointsEarnedChallengeOne);
    activityManager.changeActivity({ activity: gpsActivity });
    let pointsEarnedChallengeTwo: number = activityManager.getPoints();
    console.log("2:", pointsEarnedChallengeTwo);
    activityManager.getTotalPoints();

    let enhancedActivityManager: EnhancedActivityManager = new EnhancedActivityManager({ activity: basicActivity });
    let pointsEarnedChallengeThree: number = enhancedActivityManager.getDoublePoints();
    console.log("3:", pointsEarnedChallengeThree);
    enhancedActivityManager.changeActivity({ activity: gpsActivity });
    let pointsEarnedChallengeFour: number = enhancedActivityManager.getDoublePoints();
    console.log("4:", pointsEarnedChallengeFour);
    enhancedActivityManager.getTotalPoints();
}

main();