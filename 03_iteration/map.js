const mp=new Map();

mp.set('in','india')
mp.set('us','usa')
mp.set('np','nepal')
mp.set('np','nepal')
//console.log(mp); // return objects of unique elements


// for (const item of mp) {
//   console.log(item)
// }    // return arrays of unique elements

// for (const [iterator] of mp) {
//   console.log(iterator)
// }      // returns unique keys present in map'mp'

for (const [key,value] of mp) {
  console.log(key,value);
}

// const value1=mp.values();
// console.log(value1); // returns a new iterable value object

// console.log(value1.next().value);

// console.log(Object.keys(mp))// although map is object but we cant access keys through this it will display empty array





const num=[1,5,6,7,9,15]
const newNum=num.map((item)=>{
  return item+10;
})
console.log(newNum);