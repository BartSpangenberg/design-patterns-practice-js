import { IterableCollectionInterface } from "./IterableCollection";
import { IteratorInterface } from "./Iterator";

export class DifficultyIterator implements IteratorInterface {
    private collection: IterableCollectionInterface;
    private position: number = 0;
    private items: any[];

    constructor(collection: IterableCollectionInterface) {
        this.collection = collection;
        this.items = this.collection.getItems();
        this.sortItems();
    }

    sortItems() {
        this.items.sort((a, b) => {
            if (a.difficulty > b.difficulty) return -1
            if (a.difficulty > b.difficulty) return 1
            else return 0
        });
    }

    getNext(): any {
        const nextItem = this.items[this.position];
        this.position++;
        return nextItem;
    }

    hasMore(): boolean {
        return this.items.length > this.position;
    }
}