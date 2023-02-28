export class Challenge {
    id: string;
    points: number;

    constructor({ id, points }: {
        id: string,
        points: number,
    }) {
        this.id = id;
        this.points = points;
    }
}