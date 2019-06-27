import React from 'react'
import PropTypes from 'prop-types'
import Screen from './Screen'
import Numpad from './Numpad'
import { CalcWrap } from '../styled/calculator.css.js'

const Calculator = (props) => {
  return (
    <CalcWrap>
      <Screen />
      <Numpad />
    </CalcWrap>
  )
}

export default Calculator
