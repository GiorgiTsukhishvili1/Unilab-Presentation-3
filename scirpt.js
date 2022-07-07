"use strict";

// In JavaScript, a closure is a function that
// references variables in the outer scope from its inner scope

// w3school: A closure is a function having access
// to the parent scope, even after the parent function has closed.

// let i = 1;

// const f = () => {
//   console.log(i);
// };

// f();

let i = 2;

const parentFunction = () => {
  let value = 5;
  console.log(value);
  console.log(i);

  const childFunction = () => {
    console.log((i += 5));
    console.log((value += 1));
  };

  return childFunction;
};

const data = parentFunction();

console.log(data);

data();
data();
data();
