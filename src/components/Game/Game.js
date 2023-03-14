import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'

import GuessInput from '../GuessInput'
import GuessResult from '../GuessResult/GuessResult'
import WonBanner from '../WonBanner/WonBanner'
import LostBanner from '../LostBanner/LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= 6) {
      setGameStatus('lost')
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} addGuessResults={handleGuess} />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  )
}

export default Game
