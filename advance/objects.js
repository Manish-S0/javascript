function divide(num){
  return num/5;
}

divide.multiply=5

console.log(divide(10))
console.log(divide.multiply)
console.log(divide.prototype)

function createUser(username,score){
  this.username=username
  this.score=score
}

createUser.prototype.increment=function(){
  this.score++;
}
createUser.prototype.printMe=function(){
  console.log(this.score)
}

// const user2=createUser('rk',250)
// const user3=createUser('uk',270)
// user2.printMe()  
// with new keyword when new object is created and the newly created object get linked to prototype and define newly created methods and the object is created on basis of 'createUser() function'

const user2=new createUser('rk',250)
const user3=new createUser('uk',270)
user2.printMe()  


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/