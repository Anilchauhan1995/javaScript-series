const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons);
console.log(body);

buttons.forEach( (button)=>{
    console.log(button)
    button.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);

        if (e.target === "grey") {

            body.style.backgroundColor = e.target.id
            console.log(e.target.id);
            
        }
        
    })
})
