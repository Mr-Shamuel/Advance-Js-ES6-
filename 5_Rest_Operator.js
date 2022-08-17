//old way
function sum(num1,num2){
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    console.log(sum);
}
sum(1,2,3,4,5,6,7,8,9,10);


//rest operator new way
function sum2(name,...args){
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }
    
    console.log(name);
    console.log(sum);
}
 
sum2("Shamuel",1,2,3,4,5);
