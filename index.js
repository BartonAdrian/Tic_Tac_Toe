'use strict';

//Game properties
let natahu = 'circle';
let hraje = document.querySelector('.hra');
let tlacitko = document.querySelectorAll('button');

//Button size
//const btn = tlacitko.style.width;
const bingo = 3;

for (let i = 0; i < tlacitko.length; i++) {
    tlacitko[i].addEventListener('click', (event) => {

        switch (natahu) {
            case 'circle':
                event.target.classList.toggle('board_field--circle');
                hraje.innerHTML = `hraje:
        <img class="ikonka" src="obrazek/cross.svg" alt="křížek" />`;
                tlacitko[i].style.backgroundImage = "url('obrazek/circle.svg')";
                tlacitko[i].style.backgroundRepeat = "no-repeat";
                tlacitko[i].style.backgroundSize = "40px 40px";
                tlacitko[i].style.backgroundPosition = "center";
                tlacitko[i].setAttribute("alt", "Circle");
                event.target.setAttribute('disabled', true);
                natahu = 'cross';
                chceckWin();
                break;
            case 'cross':
                event.target.classList.toggle('board_field--cross');
                hraje.innerHTML = ` hraje:
        <img class="ikonka" src="obrazek/circle.svg" alt="kolečko" />`;
                tlacitko[i].style.backgroundImage = "url('obrazek/cross.svg')";
                tlacitko[i].style.backgroundRepeat = "no-repeat";
                tlacitko[i].style.backgroundSize = "40px 40px";
                tlacitko[i].style.backgroundPosition = "center";
                tlacitko[i].setAttribute("alt", "Cross");
                event.target.setAttribute('disabled', true);
                natahu = 'circle';
                chceckWin();
                break;
        }
    });
}

function chceckWin() {
    for (let i = 0; i < tlacitko.length; i++) {
        if (tlacitko[i].getAttribute("alt") !== null) {
            rowWin(i);
            columnWin(i);
            awryWin(i);
        }
    }
}

function rowWin(index) {
    const znak = tlacitko[index].getAttribute("alt");
    let pocet = 1;
    for (let i = 1; i <= bingo; i++) {
        if (znak === tlacitko[index + i].getAttribute("alt")) {
            pocet++;
        }
    }
    if (pocet === bingo) {
        gameOver(znak);
    }
}

function columnWin(index) {
    const znak = tlacitko[index].getAttribute("alt");
    let pocet = 1;
    for (let i = 1; i < bingo; i++) {
        if (znak === tlacitko[index + (i * 10)].getAttribute("alt")) {
            pocet++;
        }
    }
    if (pocet === bingo) {
        gameOver(znak);
    }
}

function awryWin(index) {
    const znak = tlacitko[index].getAttribute("alt");
    let pocet = 1;
    //left-down
    for (let i = 1; i < bingo; i++) {
        if (znak === tlacitko[index + (i * 11)].getAttribute("alt")) {
            pocet++;
        }
    }
    //right-down
    for (let i = 1; i < bingo; i++) {
        if (znak === tlacitko[index + (i * 9)].getAttribute("alt")) {
            pocet++;
        }
    }
    if (pocet === bingo) {
        gameOver(znak);
    }
}

function gameOver(winner) {
    alert("Konec hry, vyhrál " + winner);
    location.reload();
}