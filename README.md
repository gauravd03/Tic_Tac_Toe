**Tic Tac Toe Game**
-This is a simple web-based Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game allows two players to compete against each other on a 3x3 grid.

**Features**
1.Simple Interface: The game provides a clean and intuitive user interface for an enjoyable gaming experience.
2.Two-player Mode: Players can take turns playing against each other.
3.Winning Detection: The game automatically detects winning combinations and declares a winner.
4.Reset Functionality: Players can reset the game at any time to start a new round.

**Technologies Used**
1-HTML: Used for the layout and structure of the game.
-CSS: Used for styling the game interface and elements.
-JavaScript: Used for implementing the game logic, including player turns, winning detection, and reset functionality.

**How to Play**
1.Open the index.html file in your web browser.
2.Enter the names of the players.
3.Click on the cells of the grid to place your respective markers (X or O).
4.The game will automatically detect winning combinations and declare a winner.
5.To start a new round, click the "Reset" button.


**JavaScript concepts used to develop this game:**

1.DOM Manipulation:
Using document.querySelector() and document.querySelectorAll() to select HTML elements from the DOM.
Manipulating element properties such as innerText and disabled to update the game UI.

2.Event Handling:
Adding event listeners to elements using addEventListener() to handle user interactions (click events on game boxes and buttons).
Conditional Statements:

3.Using if...else statements to switch between players' turns and to check for winning conditions.
Arrays:

4.Defining an array (winPatterns) to store all possible winning combinations in the Tic Tac Toe game.

5Loops:
Utilizing forEach() loop to iterate over an array of game boxes and adding click event listeners to each box.
Looping through winning patterns to check for a winning condition.

6.Functions:
Defining functions (resetGame(), enableBoxes(), disableBoxes(), showWinner(), checkWinner()) to encapsulate and organize logical blocks of code.

7.Arrow Functions:
Using arrow function syntax (() => { ... }) for defining anonymous functions passed as event listeners and for defining functions like resetGame(), enableBoxes(), etc.
CSS Classes Manipulation:

8.Adding and removing CSS classes using classList.add() and classList.remove() to control the visibility of the message container.
Constants:

9.Defining a constant (winPatterns) to store the winning patterns, preventing accidental modification.

10.Variables:
Declaring variables (boxes, resetBtn, newGameBtn, msg, msgContainer, turnO) to store references to DOM elements and game state.

11.Boolean Data Type:
Using boolean variables (turnO) to track the current player's turn.

12.Template Literals:
Using template literals to interpolate variables in string messages, e.g., Congratulations, Winner is "${winner}".
