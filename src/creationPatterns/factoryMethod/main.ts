// *Creator class
class WritingsCreator {
    // *This is the factory method, it creates "Products"
    // The factory methods need to be overwritten by subclasses
    createWriting(): WritingProduct {
        // Override in Subclass
        return new WritingProduct("");
    }

    // Often Creator classes has some form of operation that executes code on properties of the Product
    printPress() {
        let writing: WritingProduct = this.createWriting();
        writing.showHeader();
    }
}

// *This is a subclass it inherits properties from super class (WritingCreator)
// *It overwrrites the createWriting method
class BookCreator extends WritingsCreator {
    createWriting(): WritingProduct {
        return new Book("From Good to Great");
    }
}

class ArticleCreator extends WritingsCreator {
    createWriting(): WritingProduct {
        let randomNumber: number = Math.random();
        return new Book(`${randomNumber} Productivity tips`);
    }
}

// *This is the Product
// *It's an abstract class, all product must implemnt the form
class WritingProduct {
    text: string;

    showHeader() {
        console.log(this.text.toUpperCase());
    }

    constructor(text: string) {
        this.text = text;
    }
}

// *Concrete class that implements the WritingProduct interface
class Book extends WritingProduct {
    constructor(text: string) {
        super(text);
    }
}

class Article extends WritingProduct {
    constructor(text: string) {
        super(text);
    }
}


class Application {
    // *At initialization a specific configuration of the Creator class is assigned
    writingCreator: WritingsCreator;

    constructor() {
        let configuration: string = "magazine-store"; // or "magazine-store"

        let writingCreator: WritingsCreator;

        if (configuration === "magazine-store") {
            writingCreator = new ArticleCreator();
        } else {
            writingCreator = new BookCreator();
        }

        this.writingCreator = writingCreator;
    }
}

let app: Application = new Application();

// *New Products can easily be created using methods from the CreatorClass
app.writingCreator.printPress();
app.writingCreator.printPress();
app.writingCreator.printPress();
app.writingCreator.printPress();