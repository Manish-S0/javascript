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

}
console.log(user.email)
console.log(user.isLoggedIn)
console.log(user["full name"])
console.log(mySym)
console.log(user[mySym])
Object.freeze(user);
user.email="wizard@gmail.com"
console.log(user.email)
