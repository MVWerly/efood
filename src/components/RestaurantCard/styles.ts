import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 472px;
  height: 400px;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-left: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    > img {
      height: 120px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    > img {
      height: 160px;
    }
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Container = styled.div`
  border: 1px solid ${colors.salmonPink};
  border-top: none;
  padding: 8px;
  position: relative;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`

export const Grade = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled.button`
  padding: 4px 6px;
  border: none;
  background-color: ${colors.salmonPink};
  cursor: pointer;

  a {
    font-size: 14px;
    color: ${colors.lightPeach};
  }
`
