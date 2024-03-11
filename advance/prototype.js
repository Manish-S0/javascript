obj1={
  hero:'thor',
  weapon:'hammer'
}
// obj1.chai()

Object.prototype.chai=function(){
  console.log('i like chai')
}
// obj1.chai();

arr=['thor','ironman']
// arr.chai();


String.prototype.trueLength=function(){
  console.log(`True length is ${this.trim().length}`)
}
const l='manish    '.trueLength();
console.log(l)