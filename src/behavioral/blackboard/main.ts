import { HealthyEatingRecommendation } from "./EatingRecommendation";
import { ExerciseRecommendation } from "./ExerciseRecommendation";
import { RecommendationBlackboard } from "./RecommendationBlackboard";
import { RecommendationController } from "./RecommendationController";

const main = () => {
    // Create the blackboard and control component
    let blackboard = new RecommendationBlackboard();
    blackboard.userData["exerciseMinutes"] = 20;
    blackboard.userData["mealsToday"] = ["breakfast at home", "fast food lunch"];

    let sources = [new ExerciseRecommendation(), new HealthyEatingRecommendation()];

    let controller = new RecommendationController(blackboard, sources);

    // Generate recommendations
    controller.generateRecommendations();

    // Print recommendations
    for (let recommendation of blackboard.recommendations) {
        console.log(recommendation);
    }
}

main();

