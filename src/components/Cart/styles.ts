import styled from 'styled-components'
import { colors } from '../../styles'
import trash from '../../assets/images/trash-can.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.salmonPink};
  padding: 32px 8px;
  z-index: 1;

  ul {
    max-height: 85%;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
      background-color: ${colors.salmonPink};
    }
    &::-webkit-scrollbar {
      width: 1px;
      background: ${colors.salmonPink};
    }
    &::-webkit-scrollbar-thumb {
      background: ${colors.salmonPink};
    }
  }

  > p {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.lightPeach};
    margin-top: 40px;
  }

  button {
    cursor: pointer;
  }

  > button {
    width: 100%;
    padding: 4px 0;
    margin-top: 16px;
    border: none;
    background-color: ${colors.lightPeach};
    color: ${colors.salmonPink};
  }
`

export const CartItem = styled.li`
  background-color: ${colors.lightPeach};
  display: flex;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`
