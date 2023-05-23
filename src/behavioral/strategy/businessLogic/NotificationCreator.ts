import { NotificationTemplate } from "./NotificationTemplate";

// Visitor pattern

export class NotificationCreator {
    createSoloUpNotification(): NotificationTemplate {
        return new NotificationTemplate({
            id: "userId1234",
            token: "deviceToken1243",
            body: "Complete the drink water challenge!",
            header: "5 points left to reach top 10 spot!",
        });
    }

    createSoloDownNotification(): NotificationTemplate {
        return new NotificationTemplate({
            id: "userId1234",
            token: "deviceToken1243",
            body: "Complete the drink water challenge!",
            header: "You dropped to the 13th spot.",
        });
    }

    createTeamUpNotification(): NotificationTemplate {
        return new NotificationTemplate({
            id: "userId1234",
            token: "deviceToken1243",
            body: "Complete the drink water challenge!",
            header: "5 points left to reach top 2 spot for your team!",
        });
    }

    createTeamDownNotification(): NotificationTemplate {
        return new NotificationTemplate({
            id: "userId1234",
            token: "deviceToken1243",
            body: "Complete the drink water challenge!",
            header: "Your team dropped to the 4th spot.",
        });
    }
}