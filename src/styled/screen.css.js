import styled from 'styled-components'
import { colors } from './global.css.js'
import { animated } from 'react-spring'

export const ScreenWrap = styled.div`
  position: relative;
  background-color: ${colors.rain};
  width: 100%;
  padding: 8% 15% 10%;
  box-sizing: border-box;
  border-radius: 1rem 1rem 3rem 1rem;
  height: 40%;
`

export const Display = styled.div`
  background-color: ${colors.green};
  box-sizing: border-box;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  height: 100%;
`

export const Battery = styled.p`
  color: ${colors.cloud};
  font-size: 0.75rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
  font-family: sans-serif;
  position: absolute;
  top: 30%;
  left: 25px;

  @keyframes flicker {
    0%  { opacity: 0.6; }
    2%  { opacity: 0.1; }
    4%  { opacity: 1;   }
    19% { opacity: 1;   }
    21% { opacity: 0.8; }
    23% { opacity: 1;   }
    80% { opacity: 1;   }
    83% { opacity: 0.4; }
    87% { opacity: 1;   }
  }

  &::after {
    background-color: ${colors.red};
    content: " ";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    animation: flicker 4s linear infinite;
  }
`

export const Welcome = styled(animated.div)`
  position: relative;
  color: ${colors.digits};
  font-family: 'Press Start 2P';
  font-size: 1.5rem;
  text-align: center;
`

export const Formula = styled.div`
  background-color: ${colors.digits};
  color: ${colors.green};
  padding: 4px 1rem;
  box-sizing: border-box;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  font-family: 'Press Start 2P';
  text-align: right;
  letter-spacing: 3px;
`

export const Digits = styled.div`
  height: calc(100% - 20px);
  color: ${colors.digits};
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
`

export const Digit = styled.span`
  display: flex;
  font-family: 'Press Start 2P';
  justify-content: center;
  align-items: flex-end;
  width: 12.5%;
  height: 33%;
  font-size: 3.5rem;
`
