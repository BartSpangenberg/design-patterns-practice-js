import { LanguageAdapter } from "./Adapter";
import { EarthLanguage } from "./EarthLanguage"
import { ReversedLanguage } from "./ReversedLanguage";

const main = () => {
    let appLanguage: EarthLanguage = new EarthLanguage();
    appLanguage.sayHi();

    // We have 3th party library that we want to use to say Hi in another langauge
    let reversedLanguage: ReversedLanguage = new ReversedLanguage();

    // However interface is not compatible.
    // We use the adapter
    let languageAdapter: LanguageAdapter = new LanguageAdapter(reversedLanguage);

    languageAdapter.sayHi();
}

main();