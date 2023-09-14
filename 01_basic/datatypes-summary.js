// primitive

// 7 type: String, Number,Boolean,null,undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id===anotherid);  //false
const bigNumber = 12244546575777n;

// Reference (Non primitive)

// Array , Object , Function

const heroes = ["saktiman" , "naagraj" , "doga"]
let myObj = {
    name:"Anil",
    age: 28
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof bigNumber);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++



// stack(primitive) , Heap (Non-primitive) 

let myyouTubeName =  "Anil";

let anotherNane = myyouTubeName;
anotherNane = "AnilChauhan";

console.log(myyouTubeName);
console.log(anotherNane);

// Heap

let userOne = {
    emai: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "userTwo@gmai";

console.log(userOne.emai);
console.log(userTwo.emai);