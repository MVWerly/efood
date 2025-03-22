import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Image = styled.img`
  max-width: 128px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100px;
  }
`
