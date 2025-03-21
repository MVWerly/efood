import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.footer`
  > div {
    background-color: ${colors.lightPeach};
  }

  h1 {
    line-height: 0;
  }
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 10px;
    text-align: center;
    max-width: 480px;
  }
`

export const ImgContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  :nth-child(2) {
    margin: 0 8px;
  }
`
