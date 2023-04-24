/* 
    RECEIVER

    Any object can act as a receiver.

    Receiver doesn't hold references to other pattern related classes.
*/

export class Light {
    private switchedOn: boolean = false;

    public switchLights(): void {
        this.switchedOn = !this.switchedOn;
    }
}