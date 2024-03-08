// const promiseOne= new Promise(function(resolve,reject){
//   // do an async task
//   // DB calls,network

//   setTimeout(function(){
//     console.log('Async task is complete');
//     resolve();
//   },1000)
// })

// promiseOne.then(function(){
//   console.log('promise consumed');
// })


// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log('Async task');
//     resolve();
//   },1000)
// }).then(function(){
//   console.log('async 2 resolved')
// })


// const promiseThree= new Promise(function(resolve,reject){
//   setTimeout(() => {
//     resolve({username:'go',email:'gomail@xyz.com'})
//   }, 1000);
// })
// promiseThree.then(function(user){
//   console.log(user.username);
// })

// const promiseFour= new Promise(function(resolve,reject){
//   setTimeout(() => {
//     let error=false
//     if(!error){
//       resolve({username:'hey',email:'hey@dsa.com'})
//     }
//     else{
//       reject('Error: something went wrong');
//     }
//   }, 1000);
// })

// promiseFour.then(function(user){
//   console.log(user);
//   return user.email;
// }).then(function(email){
//   console.log(email);
// }).catch(function(err){
//   console.log(err);
// }).finally(function(){
//   console.log('completed')
// })

// const promiseFive= new Promise(function(resolve,reject){
//   setTimeout(() => {
//     let error=true
//     if(!error){
//       resolve({username:'js',email:'js@dsa.com'})
//     }
//     else{
//       reject('Error: something went wrong');
//     }
//   }, 1000);
// })

// async function consumePromiseFive(){
//   try {
//     const response=await promiseFive
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
  
// }
// consumePromiseFive()


// async function getAllUsers(){
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data= await response.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/todos/1').then(function(response){
  return response.json()
}).then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log(error)
})