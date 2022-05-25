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
}
;
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
//Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = "Hi There";
}
;
//Index Properties
