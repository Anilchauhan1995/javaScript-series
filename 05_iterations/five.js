// for each loop


const coding = ["js", "ruby", "java", "python","cpp"]

coding.forEach(  function (val) {

    console.log(val);
    
} )
// coding.forEach( (val) => {      //here is using block scope 

//     console.log(val);
    
// } )


// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach( printme)

// coding.forEach( (item , index , arr)=> {
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

mycoding.forEach((item)=>{

    console.log(item.languageFileName);
    console.log(item.languageName);

})

