abstract class AbstractClass {
    showName() {
        console.log("My name is Undefined");
    }

    abstract showHouseName(name: string): void;
}

class ConcreteClass extends AbstractClass {
    // @override
    showName() {
        console.log("My name is amazing");
    }

    // Implements
    showHouseName(name: string): void {
        console.log("House name is ", name);
    }
}

let concreteClass: ConcreteClass = new ConcreteClass();
concreteClass.showName();
concreteClass.showHouseName("Nice house");

