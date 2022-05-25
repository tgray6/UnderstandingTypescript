// class Department {
//     protected employees: string[] = [];
  
//     constructor(private readonly id: string, public name: string) {
//     }
  
//     describe(this: Department) {
//       console.log(`Department (${this.id}): ${this.name}`);
//     }
  
//     addEmployee(employee: string) {
//       // validation etc
//       // this.id = 'd2';
//       this.employees.push(employee);
//     }
  
//     printEmployeeInformation() {
//       console.log(this.employees.length);
//       console.log(this.employees);
//     }
//   }
  
//   class ITDepartment extends Department {
//     public admins: string[];

//     constructor(id: string, admins: string[]) {
//       super(id, 'IT');
//       this.admins = admins;
//     }
//   }
  
//   class AccountingDepartment extends Department {
//     constructor(id: string, private reports: string[]) {
//       super(id, 'Accounting');
//     }

//     //overriding addEmployee method in the base department to add our own variation, but needed to make it "protected" at line 2
//     addEmployee(name: string) {
//       if (name === "Tyler") {
//         return;
//       } else {
//         this.employees.push(name);
//       }
//     }
  
//     addReport(text: string) {
//       this.reports.push(text);
//     }
  
//     printReports() {
//       console.log(this.reports);
//     }
//   }
  
//   const IT = new ITDepartment('d1', ['Max']);
  
//   IT.addEmployee('Jace');
//   IT.addEmployee('Seth');
  
//   // IT.employees[2] = 'Anna';
  
//   IT.describe();
//   IT.name = 'NEW NAME';
//   IT.printEmployeeInformation();
  
//   console.log(IT);
  
//   const accounting = new AccountingDepartment('d2', []);
  
//   accounting.addReport('New report pushed');

//   accounting.addEmployee("Tyler");
//   accounting.addEmployee("Jean");

//   accounting.printEmployeeInformation();
  
//   accounting.printReports();