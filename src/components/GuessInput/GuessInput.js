import React from 'react'

function GuessInput({ gameStatus, addGuessResults }) {
  const [guess, setGuess] = React.useState('')

  function handleGuess(event) {
    event.preventDefault()

    addGuessResults(guess)

    setGuess('')
  }
  return (
    <form onSubmit={handleGuess} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setGuess(nextGuess)
        }}
        id='guess-input'
        type='text'
      />
    </form>
  )
}

export default GuessInput
