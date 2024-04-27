function calculateCartPrice(val1, val2, ...num1) {
    return num1;
    
}
console.log(calculateCartPrice(2 , 4 ,6 ,8));

//  ANS =  [ 2, 4, 6, 8 ]

// ANS = [ 6, 8 ]


const user =  {

    username : "Anil",
    price : 200

}


function handleObject(anyobject) {

    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}.`)
    
}

// handleObject(user);

handleObject({
    username: "AnilChauhan",
    price: 200
})

const myNewArray = [200 , 400 ,600 ,800];

function returnSecondvalue(getArray) {

    return getArray[0];
    
}


// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([600 , 400 , 800 , 300]));