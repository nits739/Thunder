// const user = {
//    name:"Nitish",
//    age: 25,
//    email:"nitish@gmail.com",
//    amount:4545
// }

// console.log(user)

// create a new key value

// user.adhar = 898878784
// // console.log(user)

// // update the value in object 

// user.age = 29
// console.log(user)

// delete user.email
// console.log(user)

// delete user;
// console.log(user)
// garbage collector:

// const user = {
//    name:"Nitish",
//    age: 25,
//    email:"nitish@gmail.com",
//    amount:4545,
//    greet: function(){
//       console.log("hello")
//    }
// }

// user.greet();

const customer = {
   name: "nitish",
   age: 25,
   accountNumber: 1212121,
   balance: 555,
   city:"Noida"
}

// keys and values ko print karna hai 

// console.log(Object.keys(customer))
// console.log(Object.values(customer))

// keys and values ek sath chahiye
// console.log(Object.entries(customer))
// [
//   [ 'name', 'nitish' ],
//   [ 'age', 25 ],
//   [ 'accountNumber', 1212121 ],
//   [ 'balance', 555 ],
//   [ 'city', 'Noida' ]
// ]
    
// for (const keys of Object.keys(customer)){
//    console.log(keys)
// }

// for (const values of Object.values(customer)){
//    console.log(values)
// }

// 2D array 
// for (const ans of Object.entries(customer)){
//    console.log(ans)
// }

// [key,value] = ["age",25]

// for(const [key,value] of Object.entries(customer)){
//    console.log(key,value)
// }

// for of loop : apply on array only 

// console.log(Object.keys(customer))

// const obj1 = {name: "Nitish"};
// const obj2 = obj1;

// obj2.name = "mohit";
// console.log(obj2)
         
            
            