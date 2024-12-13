'use strict';

let num1 = Number(prompt('Anna ensimmäinen numero'));
let num2 = Number(prompt('Anna toinen numero'));
let num3 = Number(prompt('Anna kolmas numero'));

const sum = num1 + num2 + num3;

document.querySelector('#numero1').innerHTML = sum;
document.querySelector(' #numero2').innerHTML = num1 * num2 * num3;
document.querySelector(' #numero3').innerHTML = sum /3;