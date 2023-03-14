import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import Banner from '../Banner/Banner'

function GameStartBanner() {
  return (
    <Banner status={'start'}>
      <p>
        Game started, you have <strong>{NUM_OF_GUESSES_ALLOWED}</strong> tries
        left to guess correct word.
      </p>
    </Banner>
  )
}

export default GameStartBanner
