const accountId = 1234567;
let accountEmail = "admin@gmail.com";
var accountPassword = "12345";
accountCity = "palwal";
let accountState;

// accountId = 2;  not allowed

accountEmail = "ac@gmail.com";
accountPassword = "2243434";
accountCity = "fbd";

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);