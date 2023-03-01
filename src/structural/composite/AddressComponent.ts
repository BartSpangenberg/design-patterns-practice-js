/**
 * The base Component class declares common operations for both simple and
 * complex objects of a composition.
 */
export abstract class AddressComponent {
    protected parent!: AddressComponent | null;

    /**
     * Optionally, the base Component can declare an interface for setting and
     * accessing a parent of the component in a tree structure. It can also
     * provide some default implementation for these methods.
     */
    public setParent(parent: AddressComponent | null) {
        this.parent = parent;
    }

    public getParent(): AddressComponent | null {
        return this.parent;
    }

    /**
     * In some cases, it would be beneficial to define the child-management
     * operations right in the base Component class. This way, you won't need to
     * expose any concrete component classes to the client code, even during the
     * object tree assembly. The downside is that these methods will be empty
     * for the leaf-level components.
     */
    public add(component: AddressComponent): void { }

    public remove(component: AddressComponent): void { }

    /**
     * You can provide a method that lets the client code figure out whether a
     * component can bear children.
     */
    public isComposite(): boolean {
        return false;
    }

    /**
     * The base Component may implement some default behavior or leave it to
     * concrete classes (by declaring the method containing the behavior as
     * "abstract").
     */
    // !This is the operation, that is delegated towards the end of the chain.
    public abstract displayAddress(): void;
}
