import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'
import {
  ScreenWrap,
  Display,
  Battery,
  Welcome
} from '../styled/screen.css.js'
import Calculations from './Calculations'

const Screen = (props) => {
  const [welcomed, setWelcomed] = useState(false)

  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: {
      duration: 6000
    },
    onRest: () => setWelcomed(true)
  })

  return (
    <ScreenWrap>
      <Display>
        <Battery>Battery</Battery>
        {!welcomed ? (
          <Welcome
            style={{
              opacity: x.interpolate({
                  range: [0, 0.15, 0.4, 0.85, 1],
                  output: [0, 0, 1, 1, 0]
                }),
              top: x.interpolate({
                  range: [0, 0.5, 1],
                  output: ['-300px', '0px', '0px']
                })
            }}
          >Numtendo</Welcome>
        ) : (
          <Calculations />
        )}
      </Display>
    </ScreenWrap>
  )
}

export default Screen
