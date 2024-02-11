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
console.log(hundred.toLocalString('en-IN'))