export const X = 1
export const O = 2

export function whoseTurnIsIt(moves) {
  return moves.size % 2 === 0 ? X : O
}
