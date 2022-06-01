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


function add(a: Combinable, b: Combinable): Combinable {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    } else if(typeof a === "number" && typeof b === "number") {
        return a + b;
    };
    return a.toString() + b.toString();
};

const result = add(1, 5);
const result2 = add("Tyler", "Gray");


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



//TYPE CASTING
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hi There";
};



//INDEX PROPERTIES
interface ErrorContainer {   ////properties must be interpretable as a string, so a number, string, etc. not a boolean or whatever...like below, id is still interpretable as a string, so would be a number
    // id: string;
    // 1: string;
    [prop: string]: string;
};

const errorBag: ErrorContainer = {  //1 works because it can be interpreted as a string, "1"
    //can add as many of this type of properties that we want because of the interface ErrorContainer lets us add however many so long as it is of that type^^
    1: "not a valid email",
    username: "Must start with capital character!"
};



//FUNCTION OVERLOAD
function addAgain(a: number, b: number): number;
function addAgain(a: string, b: string): string;
function addAgain(a: string, b: number): string;
function addAgain(a: number, b: string): string;

function addAgain(a: Combinable, b: Combinable): Combinable {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    };
    return a + b;
};

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

function printOptionalChain(obj: any): void {
    if(obj?.job?.title) {
        console.log(obj.job.title);
    } else {
        console.log("obj not found")
    }
};

printOptionalChain(fetchedUserData);



//Nullish Coalescing operator ??
const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData); //prints DEFAULT