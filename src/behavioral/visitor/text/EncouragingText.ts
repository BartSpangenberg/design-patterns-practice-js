import { TextComposer } from "./TextComposer";

export class EncouragingText implements TextComposer {
    sendEmail(): void {
        console.log(`
            Dear sir,

            It's going very well! Keep going. Every step is a victory.

            That reward will be sweet.

            Kind regards,
            Andre
        `)
    }

    sendNotification(): void {
        console.log(`Awesome! You're doing phenomenal, keep it up!`)
    }
}