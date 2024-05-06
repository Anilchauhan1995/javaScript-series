const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
// console.log(buttons);
// console.log(body);

buttons.forEach( (button)=>{
    // console.log(button)
    button.addEventListener('click' , function(e){
        // console.log(e);
        // console.log(e.target);

        const CurrentColor = e.target.id;
        // console.log(CurrentColor);
        // if (e.target.id === "grey") {

        //     body.style.backgroundColor = e.target.id
        //     console.log(e.target.id);
            
        // }
        // if (e.target.id === "white") {

        //     body.style.backgroundColor = e.target.id
        //     console.log(e.target.id);
            
        // }
        // if (e.target.id === "blue") {

        //     body.style.backgroundColor = e.target.id
        //     console.log(e.target.id);
            
        // }
        // if (e.target.id === "yellow") {

        //     body.style.backgroundColor = e.target.id
        //     console.log(e.target.id);
            
        // }

        switch(CurrentColor) {
            case "grey" : 
            body.style.backgroundColor = CurrentColor
            break;
            case "white" : 
            body.style.backgroundColor = CurrentColor
            break;
            case "blue" : 
            body.style.backgroundColor = CurrentColor
            break;
            case "yellow" : 
            body.style.backgroundColor = CurrentColor
            break;
        }


        
    })
})
