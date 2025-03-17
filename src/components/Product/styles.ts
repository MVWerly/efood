import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'

type typeCard = Pick<Props, 'type'>

export const Card = styled.div<typeCard>`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) =>
    props.type === 'product' ? `${colors.mainColor}` : ''};
  padding: ${(props) => (props.type === 'product' ? '8px' : 'none')};
  color: ${(props) =>
    props.type === 'product' ? `${colors.linkTextColor}` : 'none'};

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Container = styled.div<typeCard>`
  border: ${(props) =>
    props.type === 'product' ? 'none' : `1px solid ${colors.mainColor}`};
  border-top: none;
  padding: ${(props) => (props.type === 'product' ? '0' : '8px')};
  position: relative;
`

export const Title = styled.h2<typeCard>`
  margin-top: ${(props) => (props.type === 'product' ? '8px' : '0')};
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

export const Description = styled.p<typeCard>`
  font-size: 14px;
  line-height: 22px;
  margin: ${(props) => (props.type === 'product' ? '8px 0' : '16px 0')};
`

export const Button = styled.button<typeCard>`
  width: ${(props) => (props.type === 'product' ? '100%' : '')};
  padding: 4px 6px;
  border: none;
  background-color: ${(props) =>
    props.type === 'product'
      ? `${colors.linkTextColor}`
      : `${colors.mainColor}`};
  cursor: pointer;

  a {
    color: ${(props) =>
      props.type === 'product'
        ? `${colors.mainColor}`
        : `${colors.linkTextColor}`};
  }
`
