// Immediately invoke function expression(IIFE)

// global scope pollution may cause problem sometimes so IIFE is used to remove pollution


// (function db(){
//   console.log('named IIFE');
// })()    // without semicolon two IIFE cannot run

(function db(){
  console.log('named IIFE');
})();
(()=>{
  console.log('unnamed IIFE');
})();

((name)=>{
  console.log(
    'unnamed IIFE'
  )
})('manish');

