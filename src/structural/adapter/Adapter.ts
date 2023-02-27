import { EarthLanguage } from "./EarthLanguage";
import { ReversedLanguage } from "./ReversedLanguage";

// * This is The Adapter
// -- It makes the Client code compatible with a 3th party library (in this case the ReversedLangugage)

// ! Inheritance (extends) of Client code
export class LanguageAdapter extends EarthLanguage {
    private reversedLanguage: ReversedLanguage;

    constructor(reversedLanguage: ReversedLanguage) {
        super();
        this.reversedLanguage = reversedLanguage;
    }

    // ! Override the Client code method
    public sayHi(): void {
        this.reversedLanguage.alphabet = this.reversedLanguage.alphabet.split("").reverse().join("");
        let greetInReverse: string = this.reversedLanguage.sayBye();

        console.log(greetInReverse);
    }
}
