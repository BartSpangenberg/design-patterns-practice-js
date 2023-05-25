import { NotificationLogic } from "./NotficationLogic";
import { NotificationCreator } from "./NotificationCreator";
import { NotificationTemplate } from "./NotificationTemplate";
import { SoloDownNotificationLogic } from "./SoloDownNotificationLogic";
import { SoloUpNotificationLogic } from "./SoloUpNotificationLogic";
import { TeamDownNotificationLogic } from "./TeamDownNotificationLogic";
import { TeamUpNotificationLogic } from "./TeamUpNotificationLogic";

export abstract class NotificationDecisionService {

    // pickNotification(): NotificationType 

    abstract createNotification(): NotificationTemplate | null;
}

/*
In this implementation the NotificationDecisionService takes care of:
1. Decision which notification will be send
2. Constructing the notification

The logic for both is tightly coupled. Every "logic", will probably correspond to a specific "message / body".

However it might be possible to use a Visitor pattern to make the code a bit more readable. 
*/


export class NotificationDecisionServiceImpl implements NotificationDecisionService {
    notificationStategies: NotificationLogic[] = [];
    notificationTemplate: NotificationTemplate | null = null;

    constructor(type: string) {
        if (type === "team") {
            this.notificationStategies = [new TeamDownNotificationLogic(), new TeamUpNotificationLogic()];
        } else if (type == "solo") {
            this.notificationStategies = [new SoloDownNotificationLogic(), new SoloUpNotificationLogic()];
        } else if (type == "both") {
            // Note that the order in which the strategies are passed decides which notification take priority.
            this.notificationStategies = [new SoloDownNotificationLogic(), new SoloUpNotificationLogic(), new TeamDownNotificationLogic(), new TeamUpNotificationLogic()];
        }
    }



    createNotification(): NotificationTemplate | null {
        let index = 0;

        // This is created here becuase we might want to initialize it with some data
        // Can also be saved as class instance member and be configured from constructor or initialize method
        let notificationCreator: NotificationCreator = new NotificationCreator();

        while (this.notificationTemplate === null) {
            this.notificationTemplate = this.notificationStategies[index].createNotification(notificationCreator);
            index++;
        }

        return this.notificationTemplate;
    }
}