// class Department {
//   // private id: string;
//   // private name: string;
//   private employees: string[] = [];

//   //shorthand defining the above commented out variables id and name
//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     // validation etc
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('d1', 'Accounting');

// accounting.addEmployee('Tyler');
// accounting.addEmployee('Jace');

// // accounting.employees[2] = 'Anna';

// accounting.describe();
// accounting.name = 'NEW NAME';
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// // accountingCopy.describe();