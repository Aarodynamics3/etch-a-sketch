const etch_screen_container = document.querySelector(".etch-screen-container");

const etch_screen = document.createElement("div");
etch_screen.className = 'etch-screen actual-screen';
etch_screen_container.appendChild(etch_screen);

/*  Build the actual set of divs inside of etch_screen,
    it will be a 14x22 grid with each square of 
    width and height 25px by 25px (total 308). */

for (let i = 0; i < 308; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.addEventListener('mouseover', function(e) {
        square.className = 'square-colored';
    });
    etch_screen.appendChild(square);
}

const second_container = document.querySelector('.second-container');
const button_container = document.createElement('div');
const button = document.createElement('button');
button.className = 'reset-button';
button_container.className = 'button-container';
button.textContent = 'Clear';
button.addEventListener('click', function(e) {
    const squares = document.getElementsByClassName('square-colored');
    const num = squares.length;
    for (let j = 0; j < num; j++) {
        squares.item(0).className = 'square';
    }
});
button_container.appendChild(button);
second_container.appendChild(button_container);