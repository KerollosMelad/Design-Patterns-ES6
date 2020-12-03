// your code
class Employee {
    constructor(EmpID, FName, LName, NetSalary) {
        this.EmpID = EmpID; //number
        this.FName = FName; // string
        this.LName = LName; // string
        this.NetSalary = NetSalary; // number
    }
}
//////////////////////////////////////////////////////////////////////////////////////////
///Vendor Code
class Person {
    constructor() {
        this.PNumber = ""; // string
        this.FullName = ""; // string
        this.GrossSalary = 0; // number
    }

    get PNumber() {
        return this.PNumber;
    }

    set PNumber(value) {
        this.PNumber = value;
    }

    get FullName() {
        return this.FullName;
    }

    set FullName(value) {
        this.FullName = value;
    }

    get GrossSalary() {
        return this.GrossSalary;
    }

    set GrossSalary(value) {
        this.GrossSalary = value;
    }
}

///Vendor Code
function ProcessPerson(iPerson) {
    console.log(iPerson.PNumber);
    console.log(iPerson.FullName);
    console.log(iPerson.GrossSalary);
}

//////////////////////////////////////////////////////////////////////////////////////////
/////// adaptor
class EmployeeAdapter extends Person {
    constructor(emp) {
        super();
        this.employee = emp;
    }

    ///Delegation
    get PNumber() {
        return this.employee.EmpID.toString();
    }

    set PNumber(valueStr) {
        if (this.employee)
            this.employee.EmpID = +valueStr;
    }

    get FullName() {
        return this.employee.FName + ' ' + this.employee.LName;
    }

    set FullName(value) {
        if (this.employee) {
            var Names = value.Split(' ');
            this.employee.FName = Names[0];
            this.employee.LName = Names[1];
        }
    }

    get GrossSalary() {
        return this.employee.NetSalary * 1.2;
    }

    set GrossSalary(value) {
        if (this.employee)
            this.employee.NetSalary = (value * 0.8);
    }
}

function Run() {
    let emp = new Employee(0122222, "Ali", "Samer", 10000);

    ProcessPerson(new EmployeeAdapter(emp));
}