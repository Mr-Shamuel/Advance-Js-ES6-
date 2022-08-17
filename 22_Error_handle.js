// try {

//     console.log("code start form here ");
//     fdsjkl;
//     console.log("codes end here ");

// } catch (error) {
//     // console.log("Error has occured ");
//     console.log(error);
// }
// fdsjkl; 

try {
    let data = '{ "name": "Shamuel", "age": 33 }';
    let user = JSON.parse(data);
    console.log(user);
} catch (error) {
    console.log(error);

}