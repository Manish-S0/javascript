// const user={
//   name:"manish",
//   age:24,
//   email:"manish@gmail.com",
//   welcome:function(){
//     console.log(`${this.name},welcome to real world`);
//   }
// }
// user.welcome()

// const welcome=(user)=>{
//   user.welcome();
// }

// console.log(this);//if we write this in browser it will give windows

// function chai(){
//   let username='manish'
//   console.log(this);// this does not work with function
// }
// chai()

const addTwo=(num1,num2)=> (num1+num2)// no need to write return when using "()"
const name=()=>({username:"manish"})// we r returning object 
console.log(name())