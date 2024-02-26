arr=[1,2,3,4,5]

// for (const item of arr) {
//   console.log(item);
// }

// for (const key in arr) {
//   console.log(key)
// }// returns index

const myObj={
  js:"javascript",
  java:"java",
  py:"python"
}

// for (const item in myObj) {
//   console.log(key)      // return key
// } 

// for (const item in myObj) {
//  console.log(myObj[item])
// }// returns value of myObj


// for (const iterator of myObj) {
//   console.log(iterator)
// } // object is not iterable in js so we cant use forof loop for obj

console.log(myObj)


user=[{
  name:"manish",
  age:24,
},{
  name:"Nitesh",
  age:23
}]

// for (const item of user) {
//   console.log(item);
// }    // returns every obj present in array object user

// for (const key in user) {
//   console.log(key)
// }      // returns index of object

// for (const item of user) {
//   for (const key in item) {
//     console.log(key);
//   }
// }





arr.forEach(element => {
  console.log(element)
});