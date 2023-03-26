// * 1 Association
// Shown in UML by a flat line
// Both classes reference each other
class Order {
    private customer: Customer;

    constructor(customer: Customer) {
        this.customer = customer;
    }
}

class Customer {
    private orders: Order[];

    constructor(orders: Order[]) {
        this.orders = orders;
    }
}


// * 2 Direct association
// Shown in UML by line with arrowhead. The arrowhead points from the Car has Engine, so arrow from Car to Engine
class Car {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }
}

class Engine {
    // Engine code
}


// * 3 Aggregation
// Student can be created independntly of University
// But every university hast Students, however student can also do it's own thing
// This differs from the Engine-Car example. The Engine cannot do anything else, it can only belong to the Car.
// The Student could go to multiple universities
// Respresented by a line with a diamond shape that is not filled in

class University {
    private students: Student[];

    constructor(students: Student[]) {
        this.students = students;
    }
}

class Student {
    // Student code
}

// * 4 Composition