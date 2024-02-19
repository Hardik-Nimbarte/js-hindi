//singleton

//object literals

const JsUser ={
    name:"Hardik",
    age:"18",
    lacation:"jaipur",
    isLoggedIn:false,
    email:"hardik@google.com"
}

//console.log(JsUser.name)
//JsUser.email="saurabh@google.com"
console.log(JsUser.email)
//to freeze aything that must not get changed in the future 
//the changes will not get propogted
Object.freeze(JsUser.email)
JsUser.email="saurabh@google.com"
console.log(JsUser)