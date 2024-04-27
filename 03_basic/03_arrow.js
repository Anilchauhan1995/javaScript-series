const user = {

    username : "Anil",
    price : 200,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
    }
    
}
console.log(this);

// user.welcomeMessage()
// user.username = "Chauhan"
// user.welcomeMessage();