// singleton

// object literals

const mySym = Symbol("key1");;

const jsUser = {

    name : "Anil",
    "fullName" : "Anil Chauhan",
    [mySym] : "mykey1",
    age : 28,
    location : "Palwal",
    email : "anil@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// myArray = ["Anil", "C"]

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.fullName);
// console.log(jsUser[mySym]);

jsUser.email = "anilC@gmail.com";
// console.log(jsUser);
// Object.freeze(jsUser);
jsUser.email = "ac@gmail.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());