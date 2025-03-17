import * as S from './styles'

import starImg from '../../assets/images/estrela.png'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export type Props = {
  title: string
  infos?: string[]
  description: string
  grade?: string
  image: string
  type: 'product' | 'restaurant'
}

const Product = ({ title, infos, image, description, grade, type }: Props) => {
  function containInfos() {
    if (infos) {
      return (
        <>
          {infos.map((info, index) => (
            <TagContainer key={index}>{info}</TagContainer>
          ))}
        </>
      )
    }
  }

  if (type === 'restaurant') {
    return (
      <S.Card type="restaurant">
        <img src={image} alt={title} />
        <S.Infos>{containInfos()}</S.Infos>
        <S.Container type="restaurant">
          <S.Title type="restaurant">{title}</S.Title>
          <S.Grade>
            {grade} <img src={starImg} alt="star" />
          </S.Grade>
          <S.Description type="restaurant">{description}</S.Description>
          <S.Button type="restaurant">
            <Link to="/profile">Saiba mais</Link>
          </S.Button>
        </S.Container>
      </S.Card>
    )
  }

  return (
    <S.Card type="product">
      <img src={image} alt={title} />
      <S.Container type="product">
        <S.Title type="product">{title}</S.Title>
        <S.Description type="product">{description}</S.Description>
        <S.Button type="product">
          <Link to="/profile">Adicionar ao carrinho</Link>
        </S.Button>
      </S.Container>
    </S.Card>
  )
}

export default Product
