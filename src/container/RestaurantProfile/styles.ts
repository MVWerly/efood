import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;

  :nth-child(1) {
    text-align: start;
  }

  :nth-child(2) {
    text-align: center;
  }

  :nth-child(3) {
    text-align: end;
  }
`

export const TitleSmall = styled.h3`
  font-size: 18px;
  font-weight: 900;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  position: relative;
  z-index: 1;
`

export const TitleBig = styled.h1`
  margin-top: 152px;
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
  position: relative;
  z-index: 1;
`
