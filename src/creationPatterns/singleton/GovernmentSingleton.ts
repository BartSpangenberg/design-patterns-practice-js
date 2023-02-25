export class GovernmentSingleton {
    // *Private makes sure it cannot be accessed from outside the class
    // *Static makes sure it can be accesed by all classes of this type, essential to make sure that it's a singleton
    private static instance: GovernmentSingleton;
    public president = "Harry Potter";

    // *Constructor should always be private to prevent creation of class using new operator
    private constructor() { }

    // *Method to get access to the singleton
    // If doens't exist create
    public static getGovernment(): GovernmentSingleton {
        if (!GovernmentSingleton.instance) {
            GovernmentSingleton.instance = new GovernmentSingleton();;
        }

        return this.instance;
    }

    // * Use of word public is a bit unneccessaary but it's here for clarity
    public showCandidates(): void {
        console.log("Ronaldo, Rashford or Ten Hag");
    }
}

// What does it mean if a instance variable of a class is both private and static?
// If an instance variable of a class is both private and static, it means that the variable is a static member of the class that is not accessible from outside the class.

// Private variables in a class can only be accessed by methods defined within the same class, while static variables belong to the class rather than to a specific instance of the class, and can be accessed using the class name rather than an instance variable.

// When a variable is marked as private and static, it can only be accessed by static methods within the class. The variable is shared across all instances of the class and can only be modified by methods within the same class.

// This type of variable can be useful for storing data that needs to be shared across all instances of a class, but that should not be accessible from outside the class. For example, a class that keeps track of the number of instances created might use a private static variable to store this information.
