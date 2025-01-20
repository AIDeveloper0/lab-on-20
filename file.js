// JavaScript to change the background color of the body
document.getElementById("changeColorButton").addEventListener("click", function() {
    // Array of color options
    const colors = ["#f4f4f4", "#f1c40f", "#e74c3c", "#2ecc71", "#3498db", "#9b59b6"];
    
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
