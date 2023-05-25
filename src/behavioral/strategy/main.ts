import { NotificationDecisionService, NotificationDecisionServiceImpl } from "./businessLogic/NotificationDecisionService";

const main = () => {
    const NOTIFICATION_TYPE: string = "both";

    // 1. Which notification to send?
    const notDecService: NotificationDecisionService = new NotificationDecisionServiceImpl(NOTIFICATION_TYPE);

    console.log(notDecService.createNotification());
}

main();