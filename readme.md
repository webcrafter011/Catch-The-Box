Sure! Below is a detailed `README.md` file for your interactive game.

---

# Interactive Box Game

This is a fun and interactive game where you need to **catch** a randomly moving box. The box changes its position every second, and the goal is to click on it before it moves again! Upon clicking, the game ends with a "Game Over!" message.

## Table of Contents
1. [Description](#description)
2. [Features](#features)
3. [How to Play](#how-to-play)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Technologies Used](#technologies-used)
7. [License](#license)

---

## Description

In this game, the `#myBox` element moves around the screen at random positions at a regular interval. 

- **Hover over the box**: It will display the message "Please Don't 😮" with a yellow background.
- **Mouse leaves**: The box resets to the initial text and background.
- **Clicking the box**: The game ends, displaying "Game Over!" with a green box, and it stops moving.
  
The game uses basic DOM manipulation and JavaScript event listeners to handle movement and user interactions. It’s a fun way to practice CSS animations and JavaScript events.

---

## Features

- **Random Movement**: The box moves to a random position on the screen every second.
- **Interactive Events**:
  - `mouseover`: Changes text and background color.
  - `mouseleave`: Resets text and background color.
  - `click`: Ends the game, displaying "Game Over!".
- **Game Over**: After clicking the box, the game stops, and no further interactions are allowed.
- **Responsive Design**: The game works responsively across various screen sizes.

---

## How to Play

1. Open the game in a browser.
2. Watch as the box moves to random positions within the screen every second.
3. Hover the mouse over the box, and it will react with a "Please Don’t 😮" message and change its color.
4. Move your mouse away, and the box resets to its initial message.
5. **Click on the box** to end the game. When clicked, the box stops moving and displays "Game Over!" in green, indicating the end of the game.

---

## Installation

To run this game locally:

1. **Clone this repository**:

   ```bash
   git clone git@github.com:webcrafter011/Catch-The-Box.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd Catch-The-Box
   ```

3. **Open the `index.html` file in your browser**. The game should be running locally on your machine.

   ```bash
   open index.html  # On macOS, or just double-click it on Windows/Linux
   ```

4. No additional installation is needed; all necessary files (HTML, CSS, and JavaScript) are included in the project.

---

## Project Structure

```
interactive-box-game/
│
├── index.html        # The main HTML file that runs the game
├── style.css         # The stylesheet that styles the game and makes it interactive
└── script.js         # The JavaScript file that contains the logic for random movement, events, and game rules
```

---

## Technologies Used

- **HTML5**: Structure of the game (markup).
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6)**: Handles DOM manipulation, event listeners, and random movement logic.

---


Feel free to modify and enhance this game as you wish. You can add features such as a countdown timer, scoring, or even multiple levels for extra challenge!

