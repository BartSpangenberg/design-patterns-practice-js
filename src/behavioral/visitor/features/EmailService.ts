import { TextComposer } from "../text/TextComposer";
import { CommunicationService } from "./CommunicationService";

export class EmailService implements CommunicationService {
    send(text: TextComposer): void {
        text.sendEmail();
    }
}