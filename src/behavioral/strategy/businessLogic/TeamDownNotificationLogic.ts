import { NotificationLogic } from "./NotficationLogic";
import { NotificationCreator } from "./NotificationCreator";
import { NotificationTemplate } from "./NotificationTemplate";

export class TeamDownNotificationLogic implements NotificationLogic {
    createNotification(notificationCreator: NotificationCreator): NotificationTemplate | null {

        // Some logic, return null or message...

        return new NotificationTemplate({
            id: "userId1234",
            token: "deviceToken1243",
            body: "Complete the drink water challenge!",
            header: "5 points left from top 2 spot for your team!",
        });
    }
}