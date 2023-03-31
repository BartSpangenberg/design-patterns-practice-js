import { Subscriber } from "./Subscriber";

export class UserProfileScreen implements Subscriber {
    update(context: string): void {
        console.log("My username is: ", context);
    }
}