// const customer = {
//    name: "Nitish",
//    age: 10,
//    value: 70,
//    city: "Noida",
//    arr: [10,20,30],
//    address:{
//       pincode:231219
//    }
// }

// const {age:ageName,value:valueName} = customer;

// console.log(ageName,valueName)

// const customer2 = {...customer};
// customer2.name = "MOHAN";
// customer2.address.pincode = 21;
// customer2.arr.push(54 );
// console.log(customer2)

// nested objects will be same for both objects

// const customer2 = structuredClone(customer);
// customer2.arr.push(3)
// console.log(customer)

// const students = [
//     { name: "Nitish", marks: 90 },
//     { name: "Rahul", marks: 85 },
//     { name: "Amit", marks: 78 }
// ];

// students.forEach(student => {
//     console.log(`${student.name}: ${student.marks}`);
// });


arr = [1,2,3,4,5]
for(var i = 0; i<=5; i++){
    setTimeout(console.log(arr))
}