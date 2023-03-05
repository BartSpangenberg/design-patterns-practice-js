import { ComplexTimeAPI } from "./ComplexTimeAPI";
import { FrameWorkTimeAPI } from "./FrameWorkTimeAPI";

// *Facade pattern acts as a way to simplify the interface to one or multiple external packages.
export class TimeFacade {
    protected complexTimeAPI = new ComplexTimeAPI();
    protected frameWorkTimeAPI = new FrameWorkTimeAPI();

    getTime(): Date {
        return this.frameWorkTimeAPI.generateTimeInHolland();
    }

    getTimeFromMars(): Date {
        return this.complexTimeAPI.getTimeFromMars();
    }
}