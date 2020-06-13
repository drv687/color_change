
const button = document.querySelector('button');
const body = document.querySelector('body');

let colorWheel = ['white', 'black', 'blue', 'green','purple', 'lightyellow', 'orange', 'brown', 'coral', 'violet']; 

body.style.backgroundColor = 'yellow';
button.addEventListener('click', changeColor);

function changeColor() {
   let colors = parseInt(Math.random() * colorWheel.length)
    body.style.backgroundColor = colorWheel[colors]
}