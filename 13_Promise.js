let num = 6;
let data = new Promise(function(resolve, reject) {
    if (num > 5) {
        resolve("success");
    } else {
        reject("Error");

    }
});

data.then((result) => {
    console.log(result);
});

data.catch((err) => {
    console.log(err);
})



// let onSuccess = (res) => {

//     console.log(res);
// }
// let onFail = (err) => {

//     console.log(err);
// }
// data.then(onSuccess);
// data.catch(onFail);