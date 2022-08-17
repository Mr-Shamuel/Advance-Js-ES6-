// old way 
const student = ["tasbiul hasan", "Motijhil", 39];
const name2 = student[0];
console.log(name2);


//destructuring the array and nested arrays.
let user = ["shamuel", "molla", 25, ["male", 25000]];
let [fname, lname, age, [gender, salary]] = user;
console.log(fname, lname, age, gender, salary);

//destructuring with rest operators

let [name, ...args] = user;
console.log(args);

//destructuring  array with function

function user1() {
    return ["Yahoo baba", 25, "Dhaka"]

}
let [name1, ag1, location] = user1();

console.log(name1, location);