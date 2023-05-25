import { NotificationTemplate } from "../NotificationTemplate";

export class SoloUpNotificationTemplate implements NotificationTemplate {
    id: string = "userId1234";
    token: string = "deviceToken1243";
    body: string = "Complete the drink water challenge!";
    header: string = "5 points left to reach top 10 spot!";
}