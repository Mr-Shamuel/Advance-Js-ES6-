let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Promise Resolved");
        resolve(10);
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second Promise Resolved");
        resolve(20);
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Third Promise Resolved");
        console.log("Third Promise Rejected");
        // resolve(30);
        reject("failed to resolve")
    }, 3000)
})

//calling  all Promise 
Promise.all([p1, p2, p3]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})