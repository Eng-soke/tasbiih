

// const number =  document.querySelector("#tiro")
// const incrementBtn = document.querySelector("#IncrementBtn")
// const resetBtn = document.querySelector("#ResetBtn")


// let initialValue = 0
// incrementBtn.addEventListener("click", function(){
//     initialValue++
  
//     number.innerHTML = initialValue

//     if(initialValue == 4){
//         number.style.backgroundColor= "green" 
//     }
//     else if(initialValue == 5){
//         number.style.backgroundColor="orange"
//     }
//     else if(initialValue == 6){
//         number.style.backgroundColor="blue"
//     }
//     else if(initialValue == 7){
//         number.style.backgroundColor="yellow"
//     }
//     else if(initialValue == 8){
//         number.style.backgroundColor="black"
//     }



//     else{
//         number.style.backgroundColor="white"
//     }

   
// })


// //reset button

// resetBtn.addEventListener("click", function(){
//     initialValue = 0
  
//     number.innerHTML= initialValue
// })




// const leerka = document.querySelector("#light")
// const onElement = document.querySelector("#onbtn")
// const offElement = document.querySelector("#offbtn")

// onElement.addEventListener("click", function(){
//     leerka.style.backgroundColor= "yellow" 
// })


// offElement.addEventListener("click", function(){
//     leerka.style.backgroundColor="white"
// })

const number = document.querySelector("#num")
const IncrementBtn = document.querySelector("#Increment")
const resetBtn = document.querySelector("#Reset")

let initialValue = 0
IncrementBtn.addEventListener("click", function(){
    initialValue ++
    number.innerHTML= initialValue

    if(initialValue==4){
        number.style.backgroundColor="green" 
    }
    else if(initialValue ==5){
        number.style.backgroundColor="yellow"
    }
    else if(initialValue ==6){
        number.style.backgroundColor="red"
    }
    else if(initialValue ==7){
        number.style.backgroundColor="black"
    }
    else if(initialValue ==5){
        number.style.backgroundColor="blue"
    }
    else if(initialValue ==2){
        number.style.color="red"
    }
    else if(initialValue ==6){
        number.style.color="black"
    }
    else{
        number.style.backgroundColor="white"
    }
})


resetBtn.addEventListener("click", function(){
    initialValue = 0
    number.innerHTML= initialValue
})