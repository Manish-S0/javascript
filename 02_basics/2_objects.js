//singleton
//objects.create()

//object literals

const mySym=Symbol("key1")
const user={
  name:"manish",
  age:24,
  email:"manish@gmail.com",
  "isLoggedIn":false,
  location:"Nepal",
  "full name":"manish sah",
  mySym:"mykey1",
  [mySym]:"mykey"//symbol is represented using [] inside object

};
// console.log(user.email)
// console.log(user.isLoggedIn)
// console.log(user["full name"])
// console.log(mySym)
// console.log(user[mySym])
// Object.freeze(user);
// user.email="wizard@gmail.com"
// console.log(user.email)

user.greeting=function(){
  console.log(`hello,${this.name}`);
}

console.log(user.greeting);//function is not executed only reference is returned
console.log(user.greeting());



obj1={a:1,b:2}
obj2={c:3,d:4}

// const obj3={...obj1,...obj2}//spread operator
// console.log(obj3);
// console.log(Object.keys(obj3));
// console.log(Object.entries(obj3));


//destructuring

const {email}=user
console.log(email);