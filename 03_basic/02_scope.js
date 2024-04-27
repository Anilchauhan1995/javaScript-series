var c = 300

let a = 300;
if (true) {

    let a = 10
    const b = 20
    var c = 30

    // console.log("inner a" , a);
    
    // let is a block scope 

    // var is a global scope
}

// console.log(a)
// console.log(b)
// console.log(c)


function one() {

    const username = "Anil"

    function two() {

        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two();
}
// one();

if (true) {

    const username = "Anil"

    if (username === "Anil") {

        const website = " youtube"
        
        // console.log(username + website);
        
    }

    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++++++++++++ intresting +++++++++++++++++++++++

console.log(addone(5));

function addone(num) {

return num + 1
    
}




const addtwo = function(num) {
    
    return num + 2
    
}
addtwo(5)