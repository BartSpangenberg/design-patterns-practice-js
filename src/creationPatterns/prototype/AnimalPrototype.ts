// *Abstract prototype class
export class AnimalPrototype {
    isHairy: boolean;
    height: number;

    constructor({ isHairy, height }: {
        isHairy: boolean, height: number
    }) {
        this.isHairy = isHairy;
        this.height = height;
    };

    clone(): AnimalPrototype {
        // TODO: Override in subclass
        return new AnimalPrototype(this);
    }
}

// *Concrete
export class Deer extends AnimalPrototype {
    hasHorns: boolean = true;

    constructor({ isHairy, height }: {
        isHairy: boolean, height: number
    }) {
        super({
            isHairy,
            height
        })
    }

    // * Override the clone method from the super class, clone the superclass
    clone(): AnimalPrototype {
        // ! "this" keyword as argument only works because we pass 1 object to the constructor. JS will interpret this as {isHairy: this.isHairy, height: this.height}
        // -- However the hasHorns will not be copied, for the new object it will be set to true.
        return new Deer(this);
    }

    // * This can be used if you want to clone the subclass
    cloneDeer(): Deer {
        return new Deer(this);
    }
}