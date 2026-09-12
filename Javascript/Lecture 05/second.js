// let user = [10,60,"Nitish",true];
// it can store anytype of data in it 
// console.log(user);

// user[1]= "Rahul"

// console.log(user)

// let num = [10,20,30,40,50,60]
// push(insert element in the array at the end) or pop(delete element from the end of an array) 

// num.push(30,101);

// num.pop()
// console.log(num)

// delete or insert element at start of an array 
// unshift: insert element at the start
// num.unshift(11);
// shift: delete element from the start of an array
// num.shift(10)
// console.log(num)

// const arr = [10,20,30]

// console.log(typeof(arr))

// for of loop ka use bhut karte hai 

// let num = [10,20,30,40]
// for(let x of num){
// console.log(x)
// }

// let marks = [10,20,30,40,50,60,70]

// const a = marks.slice(0,3)

// console.log(a)
// console.log(marks)
// slice does not change the original array

// const a = marks.splice(2,4,17,70)
// console.log(a)
// console.log(marks)
// splice create a new array from particular index and also change te original array

let marks = [10,20,30,40,50,60,70]
// starting element: splice:Delete, insert karane ke liye kar sakte hai 

// marks.splice(2,1)
// console.log(marks)

// if i have to insert 2 element from second index

marks.splice(2,0,41,91)
console.log(marks)
