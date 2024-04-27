// Immediately Invoked Function Expressions

//  global scope ke polution se problum hot hai kai bar global scope ke variable ke polution ko hatane ke lye iife function ka use krta hai


(function myfun() {
    console.log(`DB Connected`);
    
}) ();


// (  () => {                     // Arrow Function
//     console.log(`DB Connected`);
    
// }) ();

(  (name) => {                     // Arrow Function
    console.log(`DB Connected with ${name}`);
    
}) ('Anil');
