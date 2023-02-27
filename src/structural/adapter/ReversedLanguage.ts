export class ReversedLanguage {
    alphabet: string = "zyxwutsrqponmlkjihgfedcba";

    sayBye(): string {
        return this.alphabet[1] + this.alphabet[23] + this.alphabet[4];
    }
}