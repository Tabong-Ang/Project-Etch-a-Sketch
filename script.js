const containerDiv = document.querySelector("#container");

const row = 16;
const col = 16;
for (let i = 0; i < row * col; i++) {
    const squareDivs = document.createElement("div");
    squareDivs.style.cssText = "height: 40px; width: 40px; border: 1px solid black;";
    containerDiv.appendChild(squareDivs);

        squareDivs.addEventListener('mousemove', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            squareDivs.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;

        });
}

// Add a button on the top of the screen that will send the user a popup asking 
// for the number of squares per side for the new grid. Once entered, the existing 
// grid should be removed, and a new grid should be generated in the same total space 
// as before (e.g., 960px wide) so that you’ve got a new sketch pad.

const sketch = document.querySelector("#play");
sketch.addEventListener("click", () => {
let userInput = parseInt(prompt("Enter the number of squares"));
if (userInput <= 0 || isNaN(userInput) || userInput > 100) {
   userInput = prompt("Please enter a positive interger below 100");
} else {
    userDiv(userInput);
}
});




function userDiv(size) {
    containerDiv.innerHTML = '';

    // Calculate the size of each square and the container
    const squareSize = 960 / size;
    containerDiv.style.width = `${960}px`;
    containerDiv.style.height = `${960}px`;

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






