function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}


@Logger('LOGGING - GAME')
class Game {
     title = "Mario 64";

     constructor() {
         console.log('Creating game object...')
     }
}

const game = new Game();

/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                        Creating decorator template factory and rendering it to DOM
                    ALSO Adding multiple decorators, pulling in the Logger from above
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

console.log('____________________________________________________________')

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function(constructor: any) {
        console.log('Rendering Template');
        const hookEl = document.getElementById(hookId);
        const g = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = g.title;
        }
    }
}

@Logger('LOGGING GAME TITLE')
@WithTemplate("<h1>Game Object</h1>", "app")
class Game2 {
    title = "Mario Odyssey";

    constructor() {
        console.log('Creating Mario Odyssey...')
    }
}



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                        Property Decorators
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

console.log('____________________________________________________________')

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                            Returning and Changing a Class in a Class Decorator
███████████████████████████████████████████████████████████████████████████████████████████████████████████
note how if we comment out the instantiation of Game3() on line 152, we no longer render to the dom, so this method is a way of forcing us to instantiate in order to render
*/

console.log('____________________________________________________________')

function WithTemplate2(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function<T extends {new(...args: any[]): {title: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(...args: any[]) {
                super();
                console.log('Rendering Template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.title;
                }                
            }
        }
    }
}

@Logger('LOGGING GAME TITLE')
@WithTemplate2("<h1>Game Object</h1>", "app2")
class Game3 {
    title = "Megaman Soccer";

    constructor() {
        console.log('Creating Megaman Soccer...')
    }
}

//commenting this out will make it no longer render on the
const game3 = new Game3();



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                    Autobind Decorator
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}

class Printer {
    message = "This Works!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector('button')!;

button.addEventListener('click', p.showMessage);



/*
███████████████████████████████████████████████████████████████████████████████████████████████████████████
                                    Validation With Decorators
███████████████████████████████████████████████████████████████████████████████████████████████████████████
*/

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] //['required', 'positive']
    }
}

const registeredValidators: ValidatorConfig = {};

function Required2(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };    
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;

    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required': {
                    isValid = isValid && !!obj[prop];
                    break;
                }
                case 'positive': {
                    isValid = isValid && obj[prop] > 0;
                    break;
                }
            }
        }
    }
    return isValid;
}

class Course {
    @Required2
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});