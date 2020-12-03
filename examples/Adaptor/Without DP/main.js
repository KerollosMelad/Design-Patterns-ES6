// your code
class Employee {
    constructor(EmpID, FName, LName, NetSalary) {
        this.EmpID = EmpID;
        this.FName = FName;
        this.LName = LName;
        this.NetSalary = NetSalary;
    }
}

///Vendor Code
class Person {
    constructor(PNumber, FullName, GrossSalary) {
        this.PNumber = PNumber;
        this.FullName = FullName;
        this.GrossSalary = GrossSalary;
    }
}

///Vendor Code
function ProcessPerson(iPerson) {
    console.log(iPerson.PNumber);
    console.log(iPerson.FullName);
    console.log(iPerson.GrossSalary);
}


function Run() {
    let emp = new Employee(0122222, "Ali", "Samer", 10000);

    // throw 
    ProcessPerson(emp);
}