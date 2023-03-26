export class Habit {
    id: string;
    name: string;
    difficulty: number;

    constructor(data: any) {
        this.id = data.id ?? "";
        this.name = data.name ?? "";
        this.difficulty = data.difficulty ?? 5;
    }
}

export let originalHabits: Habit[] = [
    new Habit({
        id: "243910234",
        name: "Run 10 km",
        difficulty: 7,
    }),
    new Habit({
        id: "900912943",
        name: "Meditate",
        difficulty: 4,
    }),
    new Habit({
        id: "1212539032",
        name: "Drink water",
        difficulty: 2,
    }),
    new Habit({
        id: "018109481",
        name: "No phone before sleep",
        difficulty: 6,
    }),
]
