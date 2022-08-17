let numbers = [10, 20, 30, 40, 50];
let inter = numbers[Symbol.iterator]();
let store = inter.next();

while (!store.done) {
    console.log(store.value);
    store = inter.next();
}

// console.log(inter.next()); //it will print the numbers
// inter.next();
// console.log(" Hello i am sam!! ")
// console.log(inter.next().value);
// console.log(inter.next().done);