/* CALCULATRICE */
function addition() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = parseInt(a) + parseInt(b);
    let output = document.getElementById("output");
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

function soustraction() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = parseInt(a) - parseInt(b);
    let output = document.getElementById("output");
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}
function multiplication() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = parseInt(a) * parseInt(b);
    let output = document.getElementById("output");
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

function division() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = parseInt(a) / parseInt(b);
    let output = document.getElementById("output");
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

function modulo() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = a % b;
    let output = document.getElementById("output");
    output.innerHTML = "La réponse est: <b>" + sum + "</b>";
}

