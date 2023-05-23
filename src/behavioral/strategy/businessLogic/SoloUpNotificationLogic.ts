import { NotificationLogic } from "./NotficationLogic";
import { NotificationCreator } from "./NotificationCreator";
import { NotificationTemplate } from "./NotificationTemplate";

export class SoloUpNotificationLogic implements NotificationLogic {
    createNotification(notificationCreator: NotificationCreator): NotificationTemplate | null {

        // Some logic, return null or message...

        return notificationCreator.createSoloUpNotification();
    }
}