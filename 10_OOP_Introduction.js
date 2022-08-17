class hello {
    message() {
        console.log("hello Everyone");
    }
    sorry() {
        console.log("I am Sorry");
    }
}

const greet = new hello();
greet.message()
greet.sorry()



//constructor /Prototype /static methods

class student {
    constructor(name, age) {
        this.Stdname = name;
        this.stdAge = age;
        console.log("Constructor function ");
    }

    hello() {
        console.log(`Hello THere I am ${this.Stdname} i am from dhaka. I am ${this.stdAge} years old`);
    }

    static staticMethods() {
        console.log("this is static methods");
    }
}

consttructor
let a = new student("shawon Islam", 40);
//prototype methods
a.hello()
    //static staticMethod
student.staticMethods();






// class student {
//     constructor() {

//         this.id = 230;
//         this.myName = "sam";
//         this.myAge = 40;
//         console.log("constructor");

//     }

//     prototype() {
//         console.log(`Hello Everyone I am ${this.myName} currently i am ${this.myAge}`);

//     }

//     static myMethod() {
//         console.log(`Hello this is static methoes`)
//     }
// }

// const demo = new student();
// demo.prototype();
// student.myMethod();