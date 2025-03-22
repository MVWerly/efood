import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputProps = {
  $column?: string
}

type ContainerProps = {
  $isActive?: boolean
}

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.lightPeach};
`

export const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.$isActive ? 'block' : 'none')};
`

export const InputGroup = styled.div`
  margin-bottom: 8px;

  label {
    font-size: 14px;
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
    color: ${colors.lightPeach};
  }

  input {
    padding: 6px;
    width: 100%;
    border: none;
    background-color: ${colors.lightPeach};
    border: 2px solid ${colors.lightPeach};

    &.error {
      border-color: red;
    }
  }
`

export const Row = styled.div<InputProps>`
  display: ${(props) => (props.$column ? 'grid' : 'block')};
  justify-content: space-between;
  grid-template-columns: ${(props) => props.$column};

  &.margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.lightPeach};
    margin-bottom: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 55% auto;
    column-gap: 10px;
  }
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  display: inline-block;
  padding: 4px 0;
  background-color: ${colors.lightPeach};
  color: ${colors.salmonPink};
  border: none;
  margin-top: 8px;
`
