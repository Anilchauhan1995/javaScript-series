// const userEmail = 'anil@gmail.com'

// if (userEmail) {

//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
// }

// const userEmail = ""

// if (userEmail) {

//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
// }

const userEmail = []

if (userEmail) {

    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
}


// falsy value

// false, 0, -0, BigInt 0n , "", null, undefined , NaN

// truthy value 
// "0", 'false' ," ", [], {}, function(){}


// when Arry is empty

if (userEmail.length==0) {
    console.log("array is empty");
    
}

// when object is empty

const emptobj = {}

if (Object.keys(emptobj).length === 0) {

    console.log("Object is empty");
    
}


// equalty check 

// false == 0  =>  true
// false == "" =>  true 
// 0 == "" =>  true 

// Nullish coalescing operator (??) : null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 120 ? console.log("less than 80") : console.log("more than 80");

