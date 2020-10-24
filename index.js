'use strict';

//Game properties
let natahu = 'circle';
let hraje = document.querySelector('.hra');
let tlacitko = document.querySelectorAll('button');

for (let i = 0; i < tlacitko.length; i++) {
  tlacitko[i].addEventListener('click', (event) => {

    switch(natahu){
      case 'circle' : 
        event.target.classList.toggle('board_field--circle');
        hraje.innerHTML = `hraje:
        <img class="ikonka" src="obrazek/cross.svg" alt="křížek" />`;
        tlacitko[i].style.backgroundImage = "url('obrazek/circle.svg')";
        tlacitko[i].style.backgroundRepeat = "no-repeat";
        tlacitko[i].style.backgroundSize = "90px 90px";
        tlacitko[i].style.backgroundPosition = "center";
        event.target.setAttribute('disabled', true);
        natahu = 'cross';
        break;
      case 'cross':
        event.target.classList.toggle('board_field--cross');
        hraje.innerHTML = ` hraje:
        <img class="ikonka" src="obrazek/circle.svg" alt="kolečko" />`;
        tlacitko[i].style.backgroundImage = "url('obrazek/cross.svg')";
        tlacitko[i].style.backgroundRepeat = "no-repeat";
        tlacitko[i].style.backgroundSize = "90px 90px";
        tlacitko[i].style.backgroundPosition = "center";
        event.target.setAttribute('disabled', true);
        natahu = 'circle'; 
        break;
    }
  });
}