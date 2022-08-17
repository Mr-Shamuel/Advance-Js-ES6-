class employee {
    constructor(name, age, salary) {
        this.empName = name;
        this.empage = age;
        this.empsalary = salary;
        console.log("this is a employee");
    }

    demo() {
        console.log(`
        Name: ${this.empName}
        Age: ${this.empage}
        Salary: ${this.empsalary}`);

    }
}


class manager extends employee {


}
let a = new manager("Shamuel", 26, 360000);
a.demo();