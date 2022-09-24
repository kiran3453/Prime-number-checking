let userinput = document.querySelector(".input")
let userinpt = document.querySelector(".inpt")
let useroutput = document.querySelector(".output")
let submit = document.querySelector("button")
count =0 
submit.onclick = function(){
count = 0
    for (let i =2; i < parseInt(userinpt.value); i++){
        if (userinpt.value % i ==0){
            count +=1
            }
        break;
        }
if (count==0){
    useroutput.innerText = ("prime number")
    }
else{
    useroutput.innerText = ("not prime number")
    }
}

