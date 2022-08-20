//template strings
const name = "shamuel";
const age = 23;
console.log(`My name is ${name}. I am ${age} years old`);


function FullName(fname, lname) {
    return `my first name is ${fname} and   my last name is ${lname}`;
}
const result = `Hello ${ FullName("Shamuel","Molla")}`
console.log(result);

//arrow function
const hello = () => {
    console.log("Hello world!");
}
hello();
const welcome = (university) => {
    return `welcome  to ${university}`;

}
const result2 = welcome("Daffodil International University");
console.log(result2);


//rest operators

function rest(num1, num2) {
    let sum = 0;
    for (let i in arguments) {
        sum += arguments[i];

    }
    console.log(sum);
}

rest(1, 2, 3, 4, 5);

//rest operators 2

function rest2(name, ...args) {
    let sum = 0;
    for (let i in args) {

        sum += args[i];
    }
    console.log(name);
    console.log(sum);
}

rest2("shamuel", 2, 3, 4, 5)

//spread operators

function spread(name, ...args) {
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    console.log(name);
    console.log(sum);
}
const arr = [2, 4, 5, 6, 7];
spread("Iron", ...arr);

// array concat 
const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [11, 22, 33, 44, 55, 66];
const arr3 = [999, ...arr1, ...arr2, 100000]
console.log(arr3);


//Object concat 

const ob1 = {
    name: 'Spider  ',
    age: 30
}
const ob2 = {
    lname: '  Monkey',
    salary: 3043344
}

const obj3 = {...ob1, ...ob2 }
console.log(obj3);
let arr21 = [5, 10, 15, 20, 25, 30, 35];
console.log("copying Array" + [...arr21]);


//obbject literals


let name1 = "shawon molla"
const ob4 = {
    name1
}
console.log(name1);

let n = "Student"
const ob5 = {
    [n + "Id"]: 11502,
    location: "dhammondi"
}
console.log(ob5.StudentId);


//destructuring array 

const user = [34, 3, 54, 2, 21, 25, 30, 35];

let [n1, n2, n3, n4, n5, n6, n7] = user;
console.log(n2);

let details = ["raju", "rony", ["JONY", "JONY2", "JONY3", "JSON"]];
let [n11, xx, [n31, n41, n51]] = details;
console.log(xx);


function users() {
    return [1, 2, 3, 4, 5, 6, 7];
}
let [c1, c2, c3, c4, c5, c6, c7] = users();
console.log(c1)

let user2 = {
    names: "Rashida ",
    id: 1,
    age: 18
}
let { names, id } = user2;
console.log(names, id);

// class oop
class hello1 {
    msg() {
        console.log("hello shamuel molla !!!");
    }
}
let a = new hello1();
a.msg();



class student {
    constructor() {
        this.name = 'Tasbiul Hasan';
        this.age = 18;
        this.id = 901;

        console.log(`hello from constructor :  ${this.name}`);
    }

    prototypesss() {
        console.log(`hey ${this.name}. you are ${this.age} years old so  i think you are perfectly match for the job!`);

    }

    static myWork() {
        console.log(`this is my work id :  ew5325`);
    }
}

//calling constructor
let con = new student();
//calling prototype 
con.prototypesss();
student.myWork();


// inhertance

class employee {
    constructor(name, age, salary) {
        this.empName = name;
        this.empage = age;
        this.empsalary = salary;
        console.log(`
       constructor is working `);
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
let a2 = new manager("Shamuel", 26, 360000);



// strict mode 

"use strict";
let data = 20;
console.log(data);

//error handling 

try {
    let x = qrer
    console.log(x);

} catch (err) {
    // console.log(err.name);
    // console.log(err.message);
    // console.log(err.stack);

    if (err instanceof ReferenceError) {
        console.log("Ay hai refernce error hoise!!");
    }
}