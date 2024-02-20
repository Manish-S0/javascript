/* based on how data are stored and accessed dataTypes are of two types */
/*primitive dataType(call by value)(stored in stack memory)

1.number  => 2 to power 53
2.string
3.boolean
4.null
5.undefined
6.bigint
7.symbol => unique

*/
/*Non-primitive(call by reference)(stored in heap memory)*/
// Array, Objects, Functions 


let age=24
let old=age

old=25
console.table([age,old]);

let arr=[3,4,5];
let arr2=arr;

arr2=[2,5]
console.log(arr);
console.log(arr2);

userOne={
    email:"hello@gmail.com",
    passkey: '21a'
}
userTwo=userOne

userTwo.email="bye@gmail.com"

console.log(userTwo)
console.log(userOne)


