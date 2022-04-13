/* CALCULATRICE */
const a = document.getElementById("num1").value;
const b = document.getElementById("num2").value;
const output = document.getElementById("output");

function addition() {
    let sum = parseInt(a) + parseInt(b);
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

function soustraction() {
    let sum = parseInt(a) - parseInt(b);
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}
function multiplication() {
    let sum = parseInt(a) * parseInt(b);
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

function division() {
    let sum = parseInt(a) / parseInt(b);
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

function modulo() {
    let sum = a % b;
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

