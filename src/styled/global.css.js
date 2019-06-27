import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  cloud: '#C8C3C0',
  rain: '#9D989C',
  storm: '#646560',
  maroon: '#B31A67',
  blue: '#3B35A5',
  red: '#B1322F',
  green: '#AFD776',
  digits: '#206C68',
  charcoal: '#3B3B3B',
  white: '#FFFFFF'
}

export const Body = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const Container = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.charcoal};
  display: flex;
  justify-content: center;
  align-items: center;
`
