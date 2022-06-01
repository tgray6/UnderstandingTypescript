
/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
    NOT RELATED TO COURSE, JUST SOME QUICK PRACTICE WITH INTERFACE, CLASSES, IMPLEMENTS, EXTENDS, SUPER()
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/
interface IGame {
    title: string;
    score: number;
    difficulty: string;
}

class Game implements IGame {
    title: string;
    score: number;
    difficulty: string;
    constructor(title: string, score: number, difficulty: string) {
        this.title = title;
        this.score = score;
        this.difficulty = difficulty
    };
};

class SNESGame extends Game {
    private console: string;
    constructor(title: string, score: number, difficulty: string, console: string) {
        super(title, score, difficulty)
        this.console = console
    };
};

let game1 = new Game("Megaman 2", 10, "Hardest");
let game2 = new Game("Megaman 3", 8, "Hard")
/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/





// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
};

const mergedGames = merge({title: "Megaman 8"}, {score: 10});

console.log(mergedGames);

//can now target the mergedGames.title, or mergedGames.score BECAUSE of generics. Note if we assign objA: object, objB: object, this would not be possible

mergedGames.score = 9;

console.log(mergedGames.title);



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                        Another Generic Function
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

interface ILengthy {
    length: number;
};

function countAndDescribe<T extends ILengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got one element`;
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} lengths`
    };
    return [element, descriptionText];
};

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(['Gamin', 'Eatin']));



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                            keyof constraint
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
};

extractAndConvert({game: "Megaman 10"}, 'game');



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                            generic classes
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    };

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    };

    getItems() {
        return [...this.data];
    };
};

const textStorage = new DataStorage<string>();
textStorage.addItem("Tyler");
textStorage.addItem("Xer0");
textStorage.removeItem("Tyler");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                generic utility types (there are a lot, but below are "Partial" and "Readonly")
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

interface ICourseGoal {
    title: string;
    description: string;
    date: Date;
};

function createCourseGoal(title: string, description: string, date: Date): ICourseGoal {
    let courseGoal: Partial<ICourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal as ICourseGoal;
};

const names: Readonly<string[]> = ["Jace", "Seth"];