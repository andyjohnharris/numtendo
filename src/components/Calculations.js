import React, { useState } from 'react'
import {
  Formula,
  Digits,
  Digit
} from '../styled/screen.css.js'
import KeyHandlers from './KeyHandlers'

const initialDigits = []


const Calculations = (props) => {
  const [digits, setDigits] = useState(initialDigits)

  const addDigits = number => {
    if (!number || typeof number !== 'number') return;

    setDigits([ ...digits, number ])
  }

  return (
    <>
      <KeyHandlers addDigits={addDigits} />
      <Formula>123+456</Formula>
      <Digits>
        {digits && digits.length ? digits.map((number, index) => (
          <Digit val={number} key={index}>{number}</Digit>
        )) : (
          <Digit>0</Digit>
        )}
      </Digits>
    </>
  )
}

export default Calculations
