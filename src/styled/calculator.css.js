import styled from 'styled-components'
import { colors } from './global.css.js'

export const CalcWrap = styled.div`
  width: 750px;
  height: 80vh;
  background-color: ${colors.cloud};
  border-radius: 30px 30px 100px 30px;
  padding: 60px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 35px;
    left: 0px;
    width: 100%;
    height: 8px;
    background-color: ${colors.storm};
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 70px);
    height: 35px;
    border-left: solid 8px ${colors.storm};
    border-right: solid 8px ${colors.storm};
  }
`
