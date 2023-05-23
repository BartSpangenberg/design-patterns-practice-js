import { NotificationCreator } from "./NotificationCreator";
import { NotificationTemplate } from "./NotificationTemplate";

export interface NotificationLogic {
    createNotification(notificationCreator: NotificationCreator): NotificationTemplate | null;
}