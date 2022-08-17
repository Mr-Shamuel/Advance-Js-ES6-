let user = {
    name: "Rashida ",
    id: 1,
    age: 18
}

// const name = user.name; // old way
// const age = user.age; // old way


// let { name, age } = user; //new way
// console.log(name, age);

// we can also use alice  or shortname here
let { name: n, age: aa } = user;
console.log(n, aa);