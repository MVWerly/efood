import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.mainColor};
  padding: 32px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  div > img {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const DescriptionContainer = styled.div`
  margin-left: 24px;
  color: ${colors.white};

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
  }
`

export const AddButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  color: ${colors.mainColor};
  background-color: ${colors.linkTextColor};
  border: none;
  cursor: pointer;
`
