let keypad = document.querySelectorAll(".key");
let optKey = document.querySelectorAll(".opt");
let equalKey = document.getElementById("eql");
let input = document.getElementById("input");
let clear = document.getElementById("clear");


// variables 
let num1 = "";
let num2 = "";
let n1 = true;
let n2 = false;
let opt = "";
let ans = 0;




keypad.forEach(key => {
        key.addEventListener("click" , ()=>{
           if(n1) {
            num1 += key.textContent;
            console.log(num1);
            input.value = num1;
           }
           else if(n2) {
            num2 += key.textContent;
            console.log(num2);
            input.value = num2;
           }
        })
    })




optKey.forEach(op =>{
    op.addEventListener("click", ()=>{
        opt = op.textContent;
        n1 = false;
        n2 = true;
        console.log(opt);
        input.value = opt;
    })
})

equalKey.addEventListener("click", calculate);

function calculate() {
    if(opt=='+') {
        ans = Number(num1) + Number(num2);
    }
    else if(opt == '-') {
        ans = Number(num1) - Number(num2);
    }
    else if(opt == '*') {
        ans = Number(num1) * Number(num2);
    }
    console.log(ans);
    input.value = ans;
}

clear.addEventListener("click", ()=>{
    num1 = "";
    num2 = "";
    n1 = !n1;
    n2 = !n2;
    opt = "";
    input.value = "";
})





// 



