/**
 * The Leaf class represents the end objects of a composition. A leaf can't have
 * any children.
 *
 * Usually, it's the Leaf objects that do the actual work, whereas Composite
 * objects only delegate to their sub-components.
 */

import { AddressComponent } from "./AddressComponent";

export class AddressLeaf extends AddressComponent {
    address: string;

    constructor(address: string) {
        super();
        this.address = address;
    }

    public displayAddress(): void {
        console.log(this.address);
    }
}
