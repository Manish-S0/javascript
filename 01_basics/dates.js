let todayDate=new Date();
console.log(todayDate);
console.log(todayDate.toDateString())
console.log(todayDate.getTime())
console.log(todayDate.toString())

console.log(todayDate.toLocaleString('Default',{
    weekday:'long'
}))