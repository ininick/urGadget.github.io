const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num"),
total = document.querySelector(".total");
let a = 1;
let b = 191.0;
plus.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    b += 191.0;
    num.innerText = a;
    console.log(a +" "+b);
    total.innerText = b;
});
minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        b -= 191.0;
        num.innerText = a;
        console.log(a +" "+b);
        total.innerText = b;
    }
});

