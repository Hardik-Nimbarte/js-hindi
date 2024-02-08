//premitives
//7 types  :string ,number ,Boolean ,null ,undefined, symbol(used for making value unique),Bigint



//reference type(non premjitives):
//array,objects, functions

//javascript is dynamically typed means the datatype of the value is not predetermined it
//is set at the time of run time and can be changed at the any time of whole code

const score =10
const scoreValue=100.486
const loggedIn=false //boolean
let userEmail = undefined
console.log(userEmail)

//bigint is used to store the big number;
const bigNumber=23940899872536n

//reference (non premitives)
//array,objects,function
//array
const heros=["hardik","saurbh"]
//object :-curly bracket represent the object 
let myObj={
    name:"hardik",
    age:22,
}
//function: function is shown by the function name
const myFunction=function(){
    console.log("hello")
}
//to get the type of the datatype of the value
console.log(typeof myFunction)
console.log(typeof myObj)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitives) heap(non premitives)
let myYoutubename="hardiik nimbarte"
let anothername =myYoutubename

anothername ="saurabh nimbarte"
console.log(myYoutubename)
console.log(anothername)


let userOne={
    email:"user@google.com",
    upi:"user"
}
let userTwo=userOne
userTwo.email="hardik@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)