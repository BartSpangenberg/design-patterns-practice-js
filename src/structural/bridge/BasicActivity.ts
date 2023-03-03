import { Actitivy } from "./Activity";

export class BasicActivity extends Actitivy {
    private points: number;

    constructor(data: any) {
        super();
        this.points = data['points'] ?? 0;
    }

    // @override
    finish(): number {
        return this.points;
    }
}