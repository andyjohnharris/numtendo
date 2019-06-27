import React from "react"
import { Body, Container } from '../styled/global.css.js'
import Calculator from '../components/Calculator'
import GoogleFonts from 'react-google-font-loader';

export default () => (
  <>
    <Body />
    <Container>
      <GoogleFonts
        fonts={[
          {
            font: 'Press Start 2P',
            weights: [400],
          }
        ]}
        subsets={['latin']}
      />
      <Calculator />
    </Container>
  </>
)
