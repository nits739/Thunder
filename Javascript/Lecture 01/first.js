// console.log("Hello World");

// let a = 10;
// a = 20;

// // string type
// let fisrtString = "John";
// console.log(fisrtString);

// console.log(a);

// const a = "Nitish";
// // a = 7; // This will cause an error because a is a constantb 
// console.log(a);

// let a = 30;
// let b = a;

// b = 40;


// let a = 10;

// a = 20;
// console.log(a);

// Primitive data type and Non primitive data type   

// Primitive data type: number, string, boolean, null, undefined, symbol, bigint -> Immutable data types

//number 
// let firstNumber = 10;
// let secondNumber = 20.7
// console.log(firstNumber,secondNumber);

//string
// let firstString = "Johnny";
// let secondString = 'Doe';
// let thirdString= `Nitish is good person ${firstNumber} ${secondNumber}`;
// console.log(firstString,secondString,thirdString);

//Boolean
// let firstBoolean = true;
// let secondBoolean = false;
// console.log(firstBoolean,secondBoolean);

//Undefined
// let a;
// console.log(a);

//Null
// let b = null;
// console.log(b);

//BigInt
//  let a = 1234567890123456789012345678901234567890n;
//  console.log(a);  

//symbol
// let a = Symbol("Nitish");
// console.log(a);
// let b = Symbol("Nitish");
// console.log(b);
// console.log(a == b); // false because each symbol is unique


// Non primitive data type: object, array, function
//ARRAY
// let arr = [10,20,30,"nitish",6.9];
// console.log(arr);

//Object ---> most important data type in JavaScript
// let person = {
//     name: "Nitish",
//     age: 25,
//     city: "Delhi",
//     isStudent: true
// }
// console.log(person); 

//Function
//  let a = function greet(){
//   console.log("Nitish");
// }

let a = function(){
  console.log("Nitish");
} 

console.log(typeof(a)); // This will print the function definition
// a(); // This will call the function and print "Nitish"
