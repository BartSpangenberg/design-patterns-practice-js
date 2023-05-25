import { NotificationTemplate } from "../NotificationTemplate";
import { SoloUpNotificationTemplate } from "./SoloUpNotificationTemplate";

export class NotificationTemplateFactory {
    getNotificationTemplate = (type: string): NotificationTemplate => {
        switch (type) {
            case "soloUp":
                return new SoloUpNotificationTemplate()
            default:
                return new SoloUpNotificationTemplate()
        }
    }
}