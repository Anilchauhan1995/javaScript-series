const user = {

    username : "Anil",
    price : 200,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username = "Chauhan"
// user.welcomeMessage();
// console.log(this);

// function myfun(){

//     let username = "anil"
//      console.log(this.username);
// }
// myfun();

// const myfun = function() {
//     let username = "anil"
//      console.log(this.username);

// }
// myfun();

// const myfun = () => {
//     let username = "anil"
//      console.log(this);

// }
// myfun();


// const myfun = (num1 , num2) => {
    
//     return num1 + num2      // expelitly arrow function add return keyword

// }
// console.log(myfun(3,4));


// const myfun = (num1 , num2) =>  num1 + num2    // implesit return arrow function remove perenthesis and curly brakets


// const myfun = (num1 , num2) =>  (num1 + num2)  
// console.log(myfun(3,4));


const myfun = (num1 , num2) =>  ({username : "Anil"})  
console.log(myfun(3,4));

