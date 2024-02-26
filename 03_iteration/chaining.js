// using more than one map or filter in same operation

num=[1,4,6,8,9,11]

const newNum=num.map((item)=>item*10)
                .map((item)=>item+5)
                .filter((item)=> item>40);

console.log(newNum);