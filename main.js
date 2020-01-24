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
