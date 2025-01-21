const containerDiv = document.querySelector("#container");

const row = 16;
const col = 16;
for (let i = 0; i < row * col; i++) {
    const squareDivs = document.createElement("div");
    squareDivs.setAttribute("class", "square-div");
    containerDiv.appendChild(squareDivs);

        squareDivs.addEventListener('mousemove', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            squareDivs.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
}


const sketch = document.querySelector("#play");
sketch.addEventListener("click", () => {
let userInput = parseInt(prompt("Enter the number of squares"));
if (userInput <= 0 || isNaN(userInput) || userInput > 100) {
   userInput = prompt("Please enter a positive interger between 1 and 100");
} else {
    userDiv(userInput);
}
});

function userDiv(size) {
    containerDiv.innerHTML = '';

    // Calculate the size of each square and the container
    const squareSize = 960 / size;
    containerDiv.style.width = `${60}rem`;
    containerDiv.style.height = `${60}rem`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = "1px solid black"
        containerDiv.appendChild(square);

        square.addEventListener('mousemove', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;

        });
    }
}






