import { Subscriber } from "./Subscriber";

export class NewsfeedScreen implements Subscriber {
    update(context: string): void {
        console.log("This post was created by: ", context);
    }
}