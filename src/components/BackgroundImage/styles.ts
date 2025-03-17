import styled from 'styled-components'
import { Props } from '.'

export const Background = styled.div<Omit<Props, 'image' | 'children'>>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props) => `${props.padding}px 0`};
`
