import { GovernmentSingleton } from "./GovernmentSingleton";

const main = () => {
    // let singleton: GovernmentSingleton= new GovernmentSingleton(); // ? Not possible due to private constructor
    let singleton: GovernmentSingleton = GovernmentSingleton.getGovernment();

    console.log(singleton.president);
    console.log(singleton.showCandidates());
}

main();