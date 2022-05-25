"use strict";
// interface Named {
//     readonly name?: string;
//     outputName?:string;
// }
// interface Greetable extends Named {
//     greet(phrase: string): void;
// }
// class Person implements Greetable {
//     name?: string;
//     age = 90;
//     constructor(n: string = "default name") {
//         this.name = n;
//     };
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// let user1 = new Person();
// user1.greet("Hey there, my name be:")
// console.log(user1);
// //anonymous function as interfaces
// interface AddFn {
//     (a: number, b: number): number
// }
// let add: AddFn;
// add = (n1: number, n2: number): number => {
//     return n1 + n2;
// };
