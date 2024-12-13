'use strict';
const names = ['John', 'Paul', 'Jones'];


var doc = document.querySelector('#target')

for (let name of names) {
    let li_name = document.createElement('li')
    li_name.innerHTML = name;
    console.log(li_name)

    doc.appendChild(li_name)
}