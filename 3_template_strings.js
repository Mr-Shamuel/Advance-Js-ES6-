//template strings
var name ="shamuel";
var age = 26;
var greet =`Hello ${name}. i am ${age} years old`;
console.log(greet);

 
function fullName(fname,lname){
    return `My name is ${fname} ${lname}.`
}
const result =`Hello ${fullName("Rashida","sultana")}`;
console.log(result);