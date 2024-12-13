'use script';

const name = prompt('Mikä on nimesi?');
const math = parseInt(Math.random()*4) + 1;

if (math === 1){
  document.querySelector(' #yksi').innerHTML = name + ', you are gryffindor';
}

else if (math === 2){
  document.querySelector(' #yksi').innerHTML = name + ', you are Slytherin';
}

else if (math === 3){
  document.querySelector(' #yksi').innerHTML = name + ', you are Hufflepuff';
}

else if (math === 4){
  document.querySelector(' #yksi').innerHTML = name + ', you are Ravenclaw';
}