const score=400
console.log(score)

const balance= new Number(4853)
console.log(balance)

//here the balace become string
console.log(balance.toString().length)

//when precision value become too long the for geting in shoerter term
console.log(balance.toFixed(4))

//to get the precision value upto the specific number
const otherNumber=23.899
console.log(otherNumber.toPrecision(2))

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'))


//++++++++++++++++++++++Maths (it is default )+++++++++++++++++++++++++++++

console.log(Math)
//there are different prperties of math
// console.log(Math.abs(-2))
// console.log(Math.round(3.5))
// console.log(Math.ceil(3.5))
// console.log(Math.floor(3.5))
// console.log(Math.min(3,4,5,6))


console.log(Math.random())
console.log((Math.random()*10)+1)
