"use strict";
const e1 = {
    name: "Tyler",
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    ;
    return a.toString() + b.toString();
}
;
const result = add(1, 5);
const result2 = add("Tyler", "Gray");
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    ;
    if ('startDate' in emp) {
        console.log(`StartDate: ${emp.startDate}`);
    }
    ;
}
;
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("driving...");
    }
    ;
}
;
class Truck {
    drive() {
        console.log("driving a truck...");
    }
    ;
    loadCargo(amount) {
        console.log(`Loading cargo ...${amount}`);
    }
    ;
}
;
const v1 = new Car();
const v2 = new Truck();
function useVehicles(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
    ;
}
;
useVehicles(v1);
useVehicles(v2);
;
;
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird': {
            speed = animal.flyingSpeed;
            break;
        }
        case 'horse':
            {
                speed = animal.runningSpeed;
            }
            ;
    }
    ;
    console.log(`Moving at speed ${speed}`);
}
;
moveAnimal({ type: "bird", flyingSpeed: 50 });
//TYPE CASTING
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = "Hi There";
}
;
;
const errorBag = {
    //can add as many of this type of properties that we want because of the interface ErrorContainer lets us add however many so long as it is of that type^^
    1: "not a valid email",
    username: "Must start with capital character!"
};
function addAgain(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    ;
    return a + b;
}
;
const overloadResult1 = addAgain(1, 5);
const overloadResult2 = addAgain("Tyler", "Gray");
const overloadResult3 = addAgain(1, "Gray");
const overloadResult4 = addAgain("Tyler", 1);
//Optional Chaining
const fetchedUserData = {
    id: 1,
    name: "Tyler",
    job: {
        title: "CEO",
        description: "My own company"
    }
};
function printOptionalChain(obj) {
    var _a;
    if ((_a = obj === null || obj === void 0 ? void 0 : obj.job) === null || _a === void 0 ? void 0 : _a.title) {
        console.log(obj.job.title);
    }
    else {
        console.log("obj not found");
    }
}
;
printOptionalChain(fetchedUserData);
//Nullish Coalescing operator ??
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData); //prints DEFAULT
