import { KnowledgeSource } from "./KnowledgeSource";
import { RecommendationBlackboard } from "./RecommendationBlackboard";

export class HealthyEatingRecommendation extends KnowledgeSource {
    makeRecommendation(blackboard: RecommendationBlackboard): string {
        if (blackboard.userData["mealsToday"].includes("fast food")) {
            return "Try cooking a healthy meal at home for dinner.";
        }
        return "";
    }
}
