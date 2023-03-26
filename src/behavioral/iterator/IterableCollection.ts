import { IteratorInterface } from "./Iterator";

export interface IterableCollectionInterface {
    createIterator(type: string): IteratorInterface;
    getItems(): any[];
}