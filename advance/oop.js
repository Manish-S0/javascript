const user={
  username:"manish",
  loginCount:4,
  isloggedIn:true,

  getUserDetails: function(){
    console.log(this);
    //console.log(username);
    console.log(this.username);
  }
}
// console.log(user.getUserDetails());
// console.log(this);



// construction function

// const promiseOne = new Promise()
const now = new Date()
// new is construction function used to create multiple instances from same object



function User(username,isloggedIn,loginCount){
  this.username=username
  this.isloggedIn= isloggedIn
  this.loginCount=loginCount

  // return this
}

// const user1= User("nitesh",true,8)
// console.log(user1)
// const user2= User("rohan",false,5)
// console.log(user1)

// without 'new' keyword the value will be overridden.

// with 'new' keyword the original data wont be affected the new instance will be created

// const user1= new User("nitesh",true,8)
// console.log(user1)
// const user2= new User("rohan",false,5)
// console.log(user1)