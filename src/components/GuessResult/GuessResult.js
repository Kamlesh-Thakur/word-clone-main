import React from 'react'
import { range } from '../../utils'
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
function GuessResult({ guesses }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guesses[num]} />
      ))}
    </div>
  )
}

export default GuessResult
