//new object create

let name ='shawon';
const obj ={
    name,
    course:"html"
}
console.log(obj);

// test 2
let n = "Id";
let obj1={
    ["Employee"+n]:11502,
    Role:"web developer",
    age:35,

    salary:function(){
        return  `I am a ${this.Role} My id is ${this.EmployeeId}`
     } 
}
obj1.age2=3423;
console.log(obj1);
console.log(obj1.salary());
//test 3
//function will return value as a object with

 const Fullname = "shamuel MOlla";
 const courses = "software tech related";

 function  student(x,y){
    return {x,y}

 }
const  res  = (student(Fullname,courses));
console.log(res);