const myBox = document.getElementById("myBox");
let gameInterval;

// Mouse Event: Mouse Over
myBox.addEventListener("mouseover", () => {
    myBox.textContent = "Please Don't 😮";
    myBox.style.backgroundColor = "#ffe212";
});

// Mouse Event: Mouse Leave
myBox.addEventListener("mouseleave", () => {
    myBox.textContent = "Don't Click Me 😏";
    myBox.style.backgroundColor = "lightblue";
});

// Mouse Event: Click
myBox.addEventListener("click", endGame);

// Function to move the box randomly within the container
function moveBoxRandomly() {
    const container = document.getElementById("container");
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const boxWidth = myBox.offsetWidth;
    const boxHeight = myBox.offsetHeight;

    // Generate random positions within container bounds
    const randomX = Math.random() * (containerWidth - boxWidth);
    const randomY = Math.random() * (containerHeight - boxHeight);

    myBox.style.left = `${randomX}px`;
    myBox.style.top = `${randomY}px`;
}

// Start the game: move the box at regular intervals
function startGame() {
    gameInterval = setInterval(moveBoxRandomly, 300); // Box moves every second
}

// End the game: clear interval and display a "Game Over" message
function endGame() {
    clearInterval(gameInterval);
    myBox.textContent = "Game Over! 🎉";
    myBox.style.backgroundColor = "green";
    myBox.style.transform = "scale(1.5)";
    myBox.style.cursor = "default";
    myBox.removeEventListener("click", endGame); // Prevent further interactions
    myBox.removeEventListener("mouseover", () => {});
    myBox.removeEventListener("mouseleave", () => {});
}

// Start the random movement
startGame();
