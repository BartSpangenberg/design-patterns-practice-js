// Abstract product
export class Kitchen {
    tools: string[];

    constructor(tools: string[]) {
        this.tools = tools;
    };
}

// Concrete products
export class JapaneseKitchen extends Kitchen {
    constructor(tools: string[]) {
        super(tools);
    }
}

export class ItalianKitchen extends Kitchen {
    constructor(tools: string[]) {
        super(tools);
    }
}