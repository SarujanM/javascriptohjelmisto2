
const year = prompt('Kuinka monta vuotta?');

if ((year %4 === 0 && year %100!== 0)|| year %400 === 0){
  document.querySelector('#piip').innerHTML = year + ' is a leap year!';
}

else {
  document.querySelector('#piip').innerHTML = year + ' Is not a leap year';
}