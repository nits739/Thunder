// const arr1 = [10,20,30,40,50]

// const arr2 = arr1

// arr2[2] = 84;
// console.log(arr1)
// console.log(arr2)

// const arr = [[10,20,30],[40,50,60],[70,80,90],[11,22,45]]

// arr[1][0] = 24

// console.log(arr[0][2])  

// for(let row=0; row<arr.length;i++)
// {  // print each row
//    console.log(arr[i])

// }

// for(let row of arr){
//    for(let col of row){
//       console.log(col)
//    }
// }

// 3D array : [[10,20],[11,12,[14,15,16]]]]

const num1 = [10,20,30,40]
const num2 = [50,60,70,80]
const num3 = [45,48,78,26]

//  const num =num1.concat(num2)

//  console.log(num)

// spread operator(MOST IMPORTANT)

// const num = [...num1,...num2,...num3]
// console.log(num) // it breaks the array and add together in same array 

const num = [10,20,30,40,50,90]

// const first = num[0];
// const second = num[1];

const[first,second,...third] = num;
// remaing array: Rest Operator(...)
console.log(first,second,third)
// it is very important topic 

// left hand: rest operator 
// right hand: spread operator 



          

