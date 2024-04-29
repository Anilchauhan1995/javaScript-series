// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 number is best");
        
    }

    // console.log(element);
    
}
for (let i = 2; i <= 10; i++) {
       
    // console.log(`outer loop ${i}`);

    for (let j = 2; j <= 10; j++) {

        // console.log(`inner loop ${j} and outer loop${i}`);

        // console.log(i + '*' + j + '=' + i*j);
        
    }

    
}

let myArray = ["flash", "batman", "superman"];

for (let k = 0; k < myArray.length; k++) {
    const element = myArray[k];

    // console.log(element);
    
}


// break and continue

// for (let index = 0; index <= 20; index++) {
//     const element = index;

//     if (element == 5) {
//         console.log(`Detected 5`);
//         break;
//     }

//     console.log(`value of index is ${element}`);
    
// }


// continue

for (let index = 0; index <= 20; index++) {
    const element = index;

    if (element == 5) {
        console.log(`Detected 5`);
        continue;
    }

    console.log(`value of index is ${element}`);
    
}