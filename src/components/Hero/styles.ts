import styled from 'styled-components'
import imgBG from '../../assets/images/Vector.png'

export const HeroBackground = styled.header`
  width: 100%;
  height: 360px;
  background-image: url(${imgBG});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 0;
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 900;
  max-width: 520px;
`
