import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const List = styled.ul`
  padding-top: 80px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
