import { TextComposer } from "./TextComposer";

export class StrictText implements TextComposer {
    sendEmail(): void {
        console.log(`
            Dear sir,

            You better work harder.

            Kind regards,
            Andre
        `)
    }

    sendNotification(): void {
        console.log(`Just do it.`)
    }
}