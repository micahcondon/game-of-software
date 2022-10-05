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

export function setsAreEquivalent(a, b) {
  if (a.size !== b.size) {
    return false
  }

  for(const item of a) {
    if (!b.has(item)) {
      return false
    }
  }

  return true
}