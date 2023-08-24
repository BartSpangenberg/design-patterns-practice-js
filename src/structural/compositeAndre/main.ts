// *COMPOSITE
// interface Decision {
//     execute(): string;
// }

// class CompositeDecision implements Decision {
//     private children: Decision[] = [];

//     constructor(private name: string, private condition: () => boolean) { }

//     add(decision: Decision): void {
//         this.children.push(decision);
//     }

//     execute(): string {
//         if (this.condition()) {
//             for (let child of this.children) {
//                 const result = child.execute();
//                 if (result) {
//                     return `${this.name} -> ${result}`;
//                 }
//             }
//         }
//         return "";
//     }
// }

// class LeafDecision implements Decision {
//     constructor(private name: string, private condition: () => boolean) { }

//     execute(): string {
//         if (this.condition()) {
//             return this.name;
//         }
//         return "";
//     }
// }

// // Create the decision tree
// const root = new CompositeDecision("root", () => true);

// const eatHealthy = new CompositeDecision("Eat Healthy?", () => Math.random() > 0.5);
// const exercise = new CompositeDecision("Exercise?", () => Math.random() > 0.5);

// const fruits = new LeafDecision("Eat Fruits", () => Math.random() > 0.5);
// const vegetables = new LeafDecision("Eat Vegetables", () => Math.random() > 0.5);

// const walk = new LeafDecision("Walk", () => Math.random() > 0.5);
// const run = new LeafDecision("Run", () => Math.random() > 0.5);

// eatHealthy.add(fruits);
// eatHealthy.add(vegetables);

// exercise.add(walk);
// exercise.add(run);

// root.add(eatHealthy);
// root.add(exercise);

// // Execute the decision tree
// console.log(root.execute());


// *COMPOSITE + STRATEGY
interface Decision {
    execute(): string;
}

interface DecisionStrategy {
    makeDecision(): boolean;
}

class RandomDecisionStrategy implements DecisionStrategy {
    makeDecision(): boolean {
        return Math.random() > 0.5;
    }
}

class CompositeDecision implements Decision {
    private children: Decision[] = [];

    constructor(private name: string, private strategy: DecisionStrategy) { }

    add(decision: Decision): void {
        this.children.push(decision);
    }

    execute(): string {
        let result = '';
        for (let child of this.children) {
            result = child.execute();
            // If a child node's execution returns a non-empty string, stop and return the result.
            if (result !== "") {
                break;
            }
        }

        // If this node's decision is true and it has a valid result from a child, prepend its name to the result.
        if (this.strategy.makeDecision() && result !== '') {
            result = `${this.name} -> ${result}`;
        }

        return result;
    }
}

class LeafDecision implements Decision {
    constructor(private name: string, private strategy: DecisionStrategy) { }

    execute(): string {
        if (this.strategy.makeDecision()) {
            return this.name;
        }
        return "";
    }
}

// Create decision strategies
const randomStrategy = new RandomDecisionStrategy();

// Create the decision tree
const root = new CompositeDecision("root", randomStrategy);

const eatHealthy = new CompositeDecision("Eat Healthy?", randomStrategy);
const exercise = new CompositeDecision("Exercise?", randomStrategy);


const fruits = new LeafDecision("Eat Fruits", randomStrategy);
const vegetables = new LeafDecision("Eat Vegetables", randomStrategy);

const walk = new LeafDecision("Walk", randomStrategy);
const run = new LeafDecision("Run", randomStrategy);


const gymExercise = new CompositeDecision("Gym exercise?", randomStrategy);
const bench = new LeafDecision("Bench", randomStrategy);
const squat = new LeafDecision("Squat", randomStrategy);

exercise.add(gymExercise);
gymExercise.add(bench);
gymExercise.add(squat);

eatHealthy.add(fruits);
eatHealthy.add(vegetables);

exercise.add(walk);
exercise.add(run);

root.add(eatHealthy);
root.add(exercise);
console.log("I RUN")
// Execute the decision tree

const answer = root.execute();

console.log(answer)


// root
// |-- Eat Healthy?
// |   |-- Eat Fruits
// |   |-- Eat Vegetables
// |
// |-- Exercise?
//     |-- Walk
//     |-- Run
//     |-- Gym?
//          |-- Bench
//          |-- Squat
