export class Curtains {
    private curtainsOpen: boolean = false;

    public openCurtains(): void {
        this.curtainsOpen = !this.curtainsOpen;
    }
}