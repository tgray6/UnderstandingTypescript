type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Tyler",
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    } else if(typeof a === "number" && typeof b === "number") {
        return a + b;
    };
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`)
    };
    if ('startDate' in emp) {
        console.log(`StartDate: ${emp.startDate}`)
    };
};

printEmployeeInformation(e1);



class Car {
    drive() {
        console.log("driving...");
    };
};

class Truck {
    drive() {
        console.log("driving a truck...");
    };

    loadCargo(amount: number) {
        console.log(`Loading cargo ...${amount}`);
    };
};

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicles(vehicle: Vehicle) {
    vehicle.drive();

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000)
    };
};

useVehicles(v1);
useVehicles(v2);



//DISCRIMINATED UNIONS

interface Bird {
    type: 'bird';
    flyingSpeed: number;
};

interface Horse {
    type: 'horse';
    runningSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird': {
            speed = animal.flyingSpeed;
            break;
        }
        case 'horse': {
            speed = animal.runningSpeed;
        };
    };
    console.log(`Moving at speed ${speed}`)
};

moveAnimal({type: "bird", flyingSpeed: 50});



//Type Casting

// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hi There";
};



//Index Properties

