import React from 'react'
import PropTypes from 'prop-types'
import KeyHandler, { KEYPRESS } from 'react-key-handler';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const KeyHandlers = ({ addDigits }) => {
  return (
    numbers.map((num, index) => (
      <KeyHandler
        key={index}
        keyEventName={KEYPRESS}
        keyValue={`${num}`}
        onKeyHandle={addDigits ? () => addDigits(num) : null}
      />
    ))
  )
}

export default KeyHandlers
