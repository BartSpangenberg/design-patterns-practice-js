import { EmailService } from "./features/EmailService";
import { NotificationService } from "./features/NotificationService";
import { EncouragingText } from "./text/EncouragingText";
import { StrictText } from "./text/StrictText";
import { TextComposer } from "./text/TextComposer";

// Visitor + polymorfism in visitor
const main = () => {
    const emailService: EmailService = new EmailService();
    const notificationService: NotificationService = new NotificationService();

    let communicationStyle: string = "strict";
    let textComposer: TextComposer = communicationStyle === "strict" ? new StrictText() : new EncouragingText();

    emailService.send(textComposer);
    notificationService.send(textComposer);
}

main();

// Visitor only
// const main = () => {

//     const emailService: EmailService = new EmailService();
//     const notificationService: NotificationService = new NotificationService();

//     const strictText: TextComposer = new StrictText();

//     emailService.send(strictText);
//     notificationService.send(strictText);
// }

// main();