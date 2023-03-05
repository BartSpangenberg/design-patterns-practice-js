import { TimeFacade } from "./TimeFacade";

const main = () => {
    let timeFacade: TimeFacade = new TimeFacade();

    timeFacade.getTime();
    timeFacade.getTimeFromMars();
}

main();