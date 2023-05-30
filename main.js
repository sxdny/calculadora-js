// variable para mostrar el resultado
let resultado = document.getElementById("textarea")

// variables de los botones
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")
let btn0 = document.getElementById("btn0")

let btnplus = document.getElementById("btnplus")
let btnequal = document.getElementById("btnequal")
let btnclear = document.getElementById("btnclear")

// acciones
btn1.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn1.innerHTML;
})

btn2.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn2.innerHTML;
})

btn3.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn3.innerHTML;
})

btn4.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn4.innerHTML;
})

btn5.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn5.innerHTML;
})

btn6.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn6.innerHTML;
})

btn7.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn7.innerHTML;
})

btn8.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn8.innerHTML;
})

btn9.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn9.innerHTML;
})

btn0.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btn0.innerHTML;
})

btnplus.addEventListener("click", () => {
    resultado.innerHTML = resultado.innerHTML + btnplus.innerHTML;
})

btnequal.addEventListener("click", () => {
    // si es encuentra un plus lo suma, si se encuentra un dividir, ns que, etc
    let operation = resultado.innerHTML.split("+")
    let guardado = 0;

    resultado.innerHTML = 0;

    for (let i = 0; i < operation.length; i++) {

        if (operation[i] != "+") {
            resultado.innerHTML = parseInt(resultado.innerHTML, 10) + parseInt(operation[i], 10)
        }
    }
})

btnclear.addEventListener("click", () => {
    resultado.innerHTML = 0;
})



