import { Actitivy } from "./Activity";

export class GpsActivity extends Actitivy {
    private metersWalked: number;
    private pointsPerMeter: number;

    constructor(data: any) {
        super();
        this.pointsPerMeter = data['pointsPerMeter'] ?? 0;
        this.metersWalked = data['metersWalked'] ?? 0;
    }

    // @override
    finish(): number {
        return this.metersWalked * this.pointsPerMeter;
    }
}