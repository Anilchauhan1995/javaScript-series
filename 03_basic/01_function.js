// function addTwoNumbers(number1 , number2){

//     console.log(number1 + number2)

// }
// addTwoNumbers(3,4);


function addTwoNumbers(number1 , number2){

    //let result = number1 + number2

   // return result

   return number1 + number2;

}
const result = addTwoNumbers(3,4);

console.log(`Result:`, result);

function loginUSerMessage(username = "Anil"){
      
    if(!username){

        console.log("please Enter a UserName")

        return;

    }
    return(`${username} just Logged in`)
}

console.log(loginUSerMessage());

