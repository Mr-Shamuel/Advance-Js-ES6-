"use strict";
let prompt = require("prompt-sync")({ sigint: true });
// a = 23; //there will show a error message
let a = 40;
console.log(a);

function sum() {
    // b = 30; //error message show where

    let b = 30;
    console.log(b);
}

sum();