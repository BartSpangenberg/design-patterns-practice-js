import { KnowledgeSource } from "./KnowledgeSource";
import { RecommendationBlackboard } from "./RecommendationBlackboard";

// Define some concrete Knowledge Sources
export class ExerciseRecommendation extends KnowledgeSource {
    makeRecommendation(blackboard: RecommendationBlackboard): string {
        if (blackboard.userData["exerciseMinutes"] < 30) {
            return "You should try to get at least 30 minutes of exercise today.";
        }
        return "";
    }
}