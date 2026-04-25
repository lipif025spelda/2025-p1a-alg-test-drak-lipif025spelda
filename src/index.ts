type Problem = {
    heads: Array<number>;    // výšky drakových hlav v cm
    knights: Array<number>;  // výšky dostupných rytířů v cm
};

const data: Array<Problem> = [
    { heads: [130, 140, 150], knights: [125, 131, 135, 142, 146, 153, 160] },
    { heads: [160, 170],      knights: [150, 155, 165] },
    { heads: [100, 120, 130], knights: [100, 120, 130, 140] },
    { heads: [200],           knights: [150, 180, 210, 220] },
];

let headCount   = data[0].heads.length;    // → 3
let firstHead   = data[0].heads[0];        // → 130
let lastHead    = data[0].heads[data[0].heads.length]; // 160
let firstKnight = data[0].knights[0];      // → 125
let lastKnight  = data[0].knights[data[0].heads.length]; // 150

type Result = {
    index: number;     // pořadí případu (1-based)
    headCount: number; // počet hlav draka
    cost: number;      // minimální cena v zlatých, nebo -1
};

function canCut(knightHeight: number, headHeight: number): boolean {
    let enoughHeight: boolean = false
    if (knightHeight > headHeight) {
        enoughHeight = true;
    } else {
        enoughHeight = false;
    }
    return(enoughHeight)
}

function solveProblem(p: Problem, index: number): Result {
    let cost = 0
    if (lastHead > lastKnight) {
        cost = -1
    } else if (firstHead > firstKnight) {
        if (firstHead < data[0].knights[1]) {
            cost = data[0].knights[1]
        }
    }
    return(cost)
}

// hlavy: 3 | cena: 426 zlatých
// hlavy: 2 | cena: -1 (nelze)
// hlavy: 3 | cena: 350 zlatých
// hlavy: 1 | cena: 210 zlatých