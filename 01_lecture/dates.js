let myDate=new Date()
console.log(myDate)

//convert in the string
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate)
//specifically declared date is printed
let myCreatedDate=new Date(2024,0,24)//year,month,date
console.log(myCreatedDate.toDateString())

//there are diiferenr syntax for declaring the dates
let myCreateDate=new Date("01-14-2023")//yy-mm-dd
//console.log(myCreateDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)//the value from 1-01-1970

console.log(myCreateDate.getTime())//we get the value in ms  and now we can compare

//to get the value in seconds devide the value in ms by 1000
console.log(Math.floor(Date.now()/1000))


let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())


