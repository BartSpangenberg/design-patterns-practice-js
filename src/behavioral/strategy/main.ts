import { NotificationDecisionService, NotificationDecisionServiceImpl } from "./businessLogic/NotificationDecisionService";

const main = () => {
    const NOTIFICATION_TYPE = "both";
    const notDecService: NotificationDecisionService = new NotificationDecisionServiceImpl(NOTIFICATION_TYPE);
    console.log(notDecService.createNotification());
}

main();