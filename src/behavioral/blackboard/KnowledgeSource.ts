import { RecommendationBlackboard } from "./RecommendationBlackboard";

export abstract class KnowledgeSource {
    abstract makeRecommendation(blackboard: RecommendationBlackboard): string;
}