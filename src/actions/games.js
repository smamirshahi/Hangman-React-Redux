export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

export function newGame(word) {
  return {
    type: NEW_GAME,
    payload: [
      word
    ]
  }
}

export function makeGuess(letter) {
  return {
    type: MAKE_GUESS,
    payload: [
      letter
    ]
  }
}