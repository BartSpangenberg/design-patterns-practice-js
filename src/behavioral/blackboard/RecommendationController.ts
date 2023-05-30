import { KnowledgeSource } from "./KnowledgeSource";
import { RecommendationBlackboard } from "./RecommendationBlackboard";

// Control Component
export class RecommendationController {
    blackboard: RecommendationBlackboard;
    sources: KnowledgeSource[];

    constructor(blackboard: RecommendationBlackboard, sources: KnowledgeSource[]) {
        this.blackboard = blackboard;
        this.sources = sources;
    }

    generateRecommendations() {
        for (let source of this.sources) {
            let recommendation = source.makeRecommendation(this.blackboard);
            if (recommendation) {
                this.blackboard.recommendations.push(recommendation);
            }
        }
    }
}