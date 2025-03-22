import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.salmonPink};
  padding: 8px;
  color: ${colors.lightPeach};
  height: 100%;

  > img {
    display: block;
    width: 100%;
    height: 168px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 400px;
  }
`

export const Container = styled.div`
  height: 100%;
`

export const Title = styled.h2`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const Button = styled.button`
  width: 100%;
  color: ${colors.salmonPink};
  padding: 4px 6px;
  border: none;
  background-color: ${colors.lightPeach};
  cursor: pointer;

  a {
    font-size: 14px;
    color: ${colors.lightPeach};
  }
`
