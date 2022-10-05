# Tic Tac Toe Basic Algorithms and Data Structures

These are algorithms and data structures to run a simple game
of standard tic tac toe. This does not include any AI opponent yet,
just a simple two person game.

## Two Pieces of information

The most basic information that we need to describe the state of
a standard tic tac toe game is just two things:

**Size of the board**
- default to 3 (means a 3 x 3 grid, and 3 in a row to win)
- same algorithms will work for any finite board size, as long as the win condition is still a full row (3 in a row on a 3x3 board, or 4 in a row on a 4x4 board), not a partial row (3 in a row on a 4x4 board)

**List of completed moves**
- a list of squares chosen in each turn, with the squares numbered from top left, 1 through (size^2)
- the game starts with an empty list [], and each player's moves are appended to the list in turn
- if Player 1 (X) chooses the top left square, and then Player 2 (O) chooses the middle square, the completed moves would be [1,5]

## Everything else is derived

Every other bit of state, such as 'whose turn is it', 'is the game over', 'who has won', and 'how to render the current board state', can be derived from those two pieces.

## Coding the algorithm

After thinking about the algorithm off and on for a couple days in my spare time, including a bit of reading and note taking, the actual coding was simple. It took me just about two hours to write the ten functions, and twenty ten cases that cover all of the algorithm details that I think I will need to build this game.