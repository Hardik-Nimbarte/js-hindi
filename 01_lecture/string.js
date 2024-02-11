const jyesh ="hello"+ "world"
//console.log(jyesh)
const name= "hitesh"
const repoCount=50
//console.log(name + repoCount  +"value")

//using backtick
console.log('my name is ${name} and repocount is ${repoCount}');

const gameName= new String('hitesh')
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.char )

const newName=gameName.substring(1,4);//here we print from 
console.log(newName)

const anotherString=gameName.slice(4,5)//it takes the slice of that string
console.log(anotherString)


const exTrim="    hardik     "//trim does the triming of the extra spaces
console.log(exTrim)
console.log(exTrim.trim())

//replace is used to replace somethihng
console.log(exTrim.replace('a','h'))

//include is used to check wether the particular part is present the string or not
console.log(exTrim.includes('ha'))