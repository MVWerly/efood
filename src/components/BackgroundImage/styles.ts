import styled from 'styled-components'
import { Props } from '.'

export const Background = styled.div<Omit<Props, 'image' | 'children'>>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${(props) => `${props.padding}px 0`};
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
    display: ${(props) => (props.overlay ? 'block' : 'none')};
  }
`
