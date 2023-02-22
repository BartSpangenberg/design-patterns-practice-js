// Abstract product
export class Food {
    ingredients: string[];

    constructor(ingredients: string[]) {
        this.ingredients = ingredients;
    }
}

// Concrete products
export class JapaneseFood extends Food {
    constructor(ingredients: string[]) {
        super(ingredients);
    }
}

export class ItalianFood extends Food {
    constructor(ingredients: string[]) {
        super(ingredients);
    }
}
