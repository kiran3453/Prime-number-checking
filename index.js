let userinput = document.querySelector(".input")
let userinpt = document.querySelector(".inpt")
let useroutput = document.querySelector(".output")
let submit = document.querySelector("button")

// submit.onclick = function(){
// count = 0
//     for (let i =2; i < parseInt(userinpt.value); i++){
//         if (userinpt.value % i === 0){
//             count +=1
//             // break;
//             }
        
//         }
// if (count==0){
//     useroutput.innerText = ("prime number")
//     }
// else{
//     useroutput.innerText = ("not prime number")
//     }
// }

submit.onclick = function(){
    // count = 0
    let con = false;
        for (let i =2; i < parseInt(userinpt.value); i++){
            if (userinpt.value % i === 0){
                con = true;
                break;
                }
            
            }
    if (con === false){
        useroutput.innerText = ("prime number")
        }
    else{
        useroutput.innerText = ("not prime number")
        }
    }
