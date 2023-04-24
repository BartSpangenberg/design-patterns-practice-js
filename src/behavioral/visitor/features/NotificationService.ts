import { TextComposer } from "../text/TextComposer";
import { CommunicationService } from "./CommunicationService";

export class NotificationService implements CommunicationService {
    send(text: TextComposer): void {
        text.sendNotification();
    }
}