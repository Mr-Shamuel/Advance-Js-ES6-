
// Array concat

let arr4 = [50,60];
let arr5 = [70,80];
let res = arr4.concat(arr5);    // concat old type

let result2 = [99,...arr4,...arr5,100];
console.log("Old Concat "+res);
console.log("New Concat "+result2);


//  Object Merge  / concat 2 object
let obj1 = {name:"cris john"};
let obj2 = {age: 49};
let obj3 = Object.assign(obj1,obj2); //old way
let obj4  ={...obj1, ...obj2}; // uupdate spread operator
console.log( obj3);
console.log( obj4);

// test 1
function sum(name,robi,...args){ //used rest operator 

        let sum = 0;
    for(let i in args){
        sum += args[i];
    }
    console.log(name,robi,sum);
}

let arr = [10,20,30];
sum("shamuel", "Robi", arr); //used spread operator

    //test 2
    let arr2 =[5,10,15,20,25,30,35];
    console.log("copying Array"+[...arr2]);

    let arr3 = arr2; 
    arr3.push(100);//pushing to arr3
   
    console.log(arr3);


 