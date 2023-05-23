import { NotificationLogic } from "./NotficationLogic";
import { NotificationCreator } from "./NotificationCreator";
import { NotificationTemplate } from "./NotificationTemplate";

export class TeamUpNotificationLogic implements NotificationLogic {
    createNotification(notificationCreator: NotificationCreator): NotificationTemplate | null {

        // Some logic, return null or message...

        return null;
    }
}