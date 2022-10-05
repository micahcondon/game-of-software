export const X = 1
export const O = 2

export function whoseTurnIsIt(moves) {
  return moves.size % 2 === 0 ? X : O
}

export function isValidMove(move, boardSize, moves) {
  return Number.isInteger(move)
    && move >= 1
    && move <= boardSize * boardSize
    && !moves.has(move)
}

export function setsAreEquivalent(a, b) {
  return a.size === b.size && setContainsAll(a,b)
}

export function setContainsAll(a, b) {

  for(const item of b) {
    if (!a.has(item)) {
      return false
    }
  }

  return true
}

export function getPlayerMoves(moves, player) {
  const filter = (_, index) => index % 2 == (player == X ? 0 : 1);
  const playerMoves = Array.from(moves).filter(filter)
  return new Set(playerMoves)
}

export function playerWins(moves, player, winningSets) {
  const playerMoves = getPlayerMoves(moves, player)
  const winningSet = winningSets.find(set => setContainsAll(playerMoves, set))
  return winningSet || false
}

export function renderBoard(moves, boardSize) {
  const playerXMoves = getPlayerMoves(moves, X)
  const playerOMoves = getPlayerMoves(moves, O)
  const board = new Array(boardSize * boardSize).fill(null)
  for(const x of playerXMoves) { board[x - 1] = X }
  for(const o of playerOMoves) { board[o - 1] = O }
  return board
}

export function generateWinningSets(boardSize) {
  return [
    ...generateRows(boardSize),
    ...generateColumns(boardSize),
    ...generateDiagonals(boardSize)
  ]
}

function generateRows(boardSize) {
  const rows = []
  const max = boardSize * boardSize;
  for(let rowStart = 1; rowStart < max; rowStart += boardSize) {
    const row = new Set()
    for(let square = rowStart; square < rowStart + boardSize; square++) {
      row.add(square)
    }
    rows.push(row)
  }
  return rows
}

function generateColumns(boardSize) {

  const columns = []
  const max = boardSize * boardSize;

  for(let columnStart = 1; columnStart <= boardSize; columnStart++) {
    const column = new Set()
    for(let square = columnStart; square <= max; square += boardSize) {
      column.add(square)
    }
    columns.push(column)
  }

  return columns
}

function generateDiagonals(boardSize) {

  const max = boardSize * boardSize;

  const diagonal = new Set()
  for(let square = 1; square <= max; square += boardSize + 1) {
    diagonal.add(square)
  }

  const antidiagonal = new Set()
  for(let square = boardSize; square < max; square += boardSize - 1) {
    antidiagonal.add(square)
  }

  return [diagonal, antidiagonal]
}
