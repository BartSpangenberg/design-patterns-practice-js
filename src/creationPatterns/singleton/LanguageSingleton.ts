export class StaticText {
    private static instance: StaticText;

    private constructor() { };

    public static getInstance(): StaticText {
        if (!StaticText.instance) {
            StaticText.instance = new StaticText();
        }
        return this.instance;
    }

    languageCode: string = "NL";
    nameTxt: string = "Naam";
    catTxt: string = "Kat";
}