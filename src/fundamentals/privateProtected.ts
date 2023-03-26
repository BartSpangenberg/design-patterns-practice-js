class PrivateProtected {
    private name: string;
    protected nameTwo: string;

    constructor({ name1, name2 }: {
        name1: string,
        name2: string,
    }) {
        this.name = name1;
        this.nameTwo = name2;
    }

    showNames() {
        console.log("Names are", this.name, this.nameTwo);
    }
}

class ChildOfClass extends PrivateProtected {
    private nameGijs: string;

    constructor(name1: string, name2: string, name3: string) {
        super({
            name1: name1,
            name2: name2,
        });
        this.nameGijs = name3;
    }

    showNamesInSubClass() {
        console.log("Names are", "not accessible", this.nameTwo);
    }
}

let parentClass: ChildOfClass = new ChildOfClass("Bart", "Kalande", "Gijs");
parentClass.showNames();
parentClass.showNamesInSubClass();