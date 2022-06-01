"use strict";
class Game {
    constructor(title, score, difficulty) {
        this.title = title;
        this.score = score;
        this.difficulty = difficulty;
    }
    ;
}
;
class SNESGame extends Game {
    constructor(title, score, difficulty, console) {
        super(title, score, difficulty);
        this.console = console;
    }
    ;
}
;
let game1 = new Game("Megaman 2", 10, "Hardest");
let game2 = new Game("Megaman 3", 8, "Hard");
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
;
const mergedGames = merge({ title: "Megaman 8" }, { score: 10 });
console.log(mergedGames);
//can now target the mergedGames.title, or mergedGames.score BECAUSE of generics. Note if we assign objA: object, objB: object, this would not be possible
mergedGames.score = 9;
console.log(mergedGames.title);
;
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got one element`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} lengths`;
    }
    ;
    return [element, descriptionText];
}
;
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(['Gamin', 'Eatin']));
/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                            keyof constraint
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/
function extractAndConvert(obj, key) {
    return obj[key];
}
;
extractAndConvert({ game: "Megaman 10" }, 'game');
/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                            generic classes
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    ;
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    ;
    getItems() {
        return [...this.data];
    }
    ;
}
;
const textStorage = new DataStorage();
textStorage.addItem("Tyler");
textStorage.addItem("Xer0");
textStorage.removeItem("Tyler");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
;
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
;
const names = ["Jace", "Seth"];
