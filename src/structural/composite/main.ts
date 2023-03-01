import { AddressComposite } from "./AddressComposite";
import { AddressLeaf } from "./AddressLeaf";

/**
 * The client code works with all of the components via the base interface.
 */
const main = () => {
    const address1: AddressLeaf = new AddressLeaf("Keijzergracht 1");
    address1.displayAddress();

    const tree: AddressComposite = new AddressComposite();

    const branch1: AddressComposite = new AddressComposite();
    branch1.add(address1);
    branch1.add(new AddressLeaf("Keijzergracht 2"));
    tree.add(branch1);

    const branch2: AddressComposite = new AddressComposite();
    branch2.add(new AddressLeaf("Herengracht 1"));
    branch2.add(new AddressLeaf("Herengracht 2"));
    branch2.add(new AddressLeaf("Herengracht 3"));
    branch2.add(new AddressLeaf("Herengracht 4"));
    tree.add(branch2);

    const branch3: AddressComposite = new AddressComposite();
    branch3.add(new AddressLeaf("Amsterdam canals"));
    tree.setParent(branch3);

    branch3.displayAddress();
    console.log("----")
    tree.displayAddress();
}

main();


// /**
//  * Thanks to the fact that the child-management operations are declared in the
//  * base Component class, the client code can work with any component, simple or
//  * complex, without depending on their concrete classes.
//  */
// function clientCode2(component1: Component, component2: Component) {
//     // ...

//     if (component1.isComposite()) {
//         component1.add(component2);
//     }
//     console.log(`RESULT: ${component1.operation()}`);

//     // ...
// }

// console.log('Client: I don\'t need to check the components classes even when managing the tree:');
// clientCode2(tree, simple);