import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Container = styled.div`
  border: 1px solid ${colors.mainColor};
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
    max-width: 21px;
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
  background-color: ${colors.mainColor};
  color: ${colors.secondaryColor};
`
