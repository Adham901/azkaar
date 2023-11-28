
let btns = document.querySelectorAll(".btns");
btns.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.add("change");
        e.textContent = `done`;

    });
});



const btn2 = document.querySelector(".btn2");
let count2 = 0;
btn2.addEventListener("click", () => {
   
    count2++;
    btn2.textContent = ` (${count2})`;
    if (count2 >= 3) {
        btn2.textContent = `done`;
        btn2.classList.add("change")
    }
});



const btn3 = document.querySelector(".btn3");
let count3 = 0;
btn3.addEventListener("click", () => {

    count3++;
    btn3.textContent = ` (${count3})`;
    if (count3 >= 3) {
        btn3.textContent = `done`;
        btn3.classList.add("change")
    }
});




let btn4 = document.querySelector(".btn4");
let count4 = 0;
btn4.addEventListener("click", () => {

    count4++;
    btn4.textContent = ` (${count4})`;
    if (count4 >= 3) {
        btn4.textContent = `done`;
        btn4.classList.add("change")
    }
});




const btn5 = document.querySelector(".btn5");
let count5 = 0;
btn5.addEventListener("click", () => {

    count5++;
    btn5.textContent = ` (${count5})`;
    if (count5 >= 10) {
        btn5.textContent = `done`;
        btn5.classList.add("change")
    }
});




const btn6 = document.querySelector(".btn6");
let count6 = 0;
btn6.addEventListener("click", () => {

    count6++;
    btn6.textContent = ` (${count6})`;
    if (count6 >= 3) {
        btn6.textContent = `done`;
        btn6.classList.add("change")
    }
});



const btn7 = document.querySelector(".btn7");
let count7 = 0;
btn7.addEventListener("click", () => {

    count7++;
    btn7.textContent = ` (${count7})`;
    if (count7 >= 4) {
        btn7.textContent = `done`;
        btn7.classList.add("change")
    }
});




const btn9 = document.querySelector(".btn9");
let count9 = 0;
btn9.addEventListener("click", () => {

    count9++;
    btn9.textContent = ` (${count9})`;
    if (count9 >= 3) {
        btn9.textContent = `done`;
        btn9.classList.add("change")
    }
});


let circle = document.querySelector(".circle");
let num = document.querySelector(".num");
let point = document.querySelector(".point");

let count = 0;

circle.addEventListener("click" , () =>{
count++;
num.textContent = count;
})
point.addEventListener("click" , () =>{
   count=0;
  num.textContent = count;
})

// اذكار المساء

let btn10 = document.querySelector(".btn10");
let count10 = 0;
btn10.addEventListener("click", () => {

    count10++;
    btn10.textContent = ` (${count10})`;
    if (count10 >= 3) {
        btn10.textContent = `done`;
        btn10.classList.add("change")
    }
});

let btn11 = document.querySelector(".btn11");
let count11 = 0;
btn11.addEventListener("click", () => {

    count11++;
    btn11.textContent = ` (${count11})`;
    if (count11 >= 3) {
        btn11.textContent = `done`;
        btn11.classList.add("change")
    }
});

let btn12 = document.querySelector(".btn12");
let count12 = 0;
btn12.addEventListener("click", () => {

    count12++;
    btn12.textContent = ` (${count12})`;
    if (count12 >= 3) {
        btn12.textContent = `done`;
        btn12.classList.add("change")
    }
});

let btn13 = document.querySelector(".btn13");
let count13 = 0;
btn13.addEventListener("click", () => {

    count13++;
    btn13.textContent = ` (${count13})`;
    if (count13 >= 10) {
        btn13.textContent = `done`;
        btn13.classList.add("change")
    }
});

let btn14 = document.querySelector(".btn14");
let count14 = 0;
btn14.addEventListener("click", () => {

    count14++;
    btn14.textContent = ` (${count14})`;
    if (count14 >= 4) {
        btn14.textContent = `done`;
        btn14.classList.add("change")
    }
});

let btn15 = document.querySelector(".btn15");
let count15 = 0;
btn15.addEventListener("click", () => {

    count15++;
    btn15.textContent = ` (${count15})`;
    if (count15 >= 3) {
        btn15.textContent = `done`;
        btn15.classList.add("change")
    }
});

let btn16 = document.querySelector(".btn16");
let count16 = 0;
btn16.addEventListener("click", () => {

    count16++;
    btn16.textContent = ` (${count16})`;
    if (count16 >= 3) {
        btn16.textContent = `done`;
        btn16.classList.add("change")
    }
});


let cirMas = document.querySelector("#cir-mas");
let numMas = document.querySelector("#num-mas");
let pointMas = document.querySelector("#po-mas");

let countMas = 0;

cirMas.addEventListener("click" , () =>{
    countMas++;
    numMas.textContent = countMas;
})
pointMas.addEventListener("click" , () =>{
    countMas=0;
    numMas.textContent = countMas;
})





let elsabah = document.querySelector(".elsabah");
let elmasa = document.querySelector(".elmasa");
let elsabahhh = document.querySelector(".elsabahhh");
let elmasaaa = document.querySelector(".elmasaaa");


elmasaaa.addEventListener("click" , () =>{
    elsabah.classList.add("display-p");
    elmasa.classList.remove("display-p");
    elmasa.classList.remove("mm");

   
})

elsabahhh.addEventListener("click" , () =>{
    elmasa.classList.add("display-p");
    elsabah.classList.remove("display-p");
})


