import { AnimalPrototype, Deer } from "./AnimalPrototype";

const main = () => {
    let animals: AnimalPrototype[] = [];
    let deer: Deer = new Deer({ isHairy: true, height: 120 });
    deer.hasHorns = false;
    let deerClone: Deer = deer.cloneDeer();
    deer.height = 150;
    deer.isHairy = false;
    animals.push(deer);
    animals.push(deerClone);

    // animals should contain a small hairy deer and a big hairless deer
    console.log(animals);
    // [
    //     Deer { isHairy: false, height: 150, hasHorns: false },  
    //     Deer { isHairy: true, height: 120, hasHorns: true }  --> The clone has horns, because the contructor of Deer doesn't set the horns property
    //   ]
}

main();

// const main = () => {
//     let animals: AnimalPrototype[] = [];
//     let deer: AnimalPrototype = new Deer({ isHairy: true, height: 120 });
//     let deerClone: AnimalPrototype = deer.clone();
//     deer.height = 150;
//     deer.isHairy = false;
//     animals.push(deer);
//     animals.push(deerClone);

//     // animals should contain a small hairy deer and a big hairless deer
//     console.log(animals);
// }

// main();