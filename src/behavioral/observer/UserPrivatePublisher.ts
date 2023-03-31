import { Subscriber } from "./Subscriber";

export class UserPrivatePublisher {
    private name: string = "";
    private subscribers: Subscriber[] = [];

    constructor() {
        this.fetchUserName();
    }

    private fetchUserName() {
        this.name = "KalanHacks";
    }

    subscribe(subscriber: any) {
        this.subscribers.push(subscriber);
    }

    unSubscribe(subscriber: any) {
        const index = this.subscribers.findIndex((sub) => sub === subscriber);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    private notify(): void {
        this.subscribers.forEach((subsriber) => {
            subsriber.update(this.name);
        });
    }

    onChangeName(name: string): void {
        this.name = name;
        this.notify();
    }
}