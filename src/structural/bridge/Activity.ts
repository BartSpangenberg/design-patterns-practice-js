// * In the Bridge pattern we call this the Implementation
// The implementation has an interface (or abstract class)
export abstract class Actitivy {
    // User has option to overrwide start
    start(): void { };

    // User must always be able to finish challenge
    // Every Activity must implement a finish, that's why it's made abstract
    abstract finish(): number;
}