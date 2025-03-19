import * as S from './styles'

import starImg from '../../assets/images/estrela.png'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export type Props = {
  title: string
  infos?: (string | boolean)[]
  description: string
  grade?: number
  image: string
  type: 'product' | 'restaurant'
  modalIsVisible?: () => void
  id?: number
}

export function capitalizeFirstLetter(string: string | boolean) {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}

const Product = ({
  title,
  infos,
  image,
  description,
  grade,
  type,
  modalIsVisible,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 248) {
      return description.slice(0, 245) + '...'
    }
    return description
  }

  function containInfos() {
    if (infos) {
      return (
        <>
          {infos.map((info, index) => (
            <TagContainer key={index}>
              {info === true
                ? 'Destaque da semana'
                : capitalizeFirstLetter(info)}
            </TagContainer>
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
          <S.Description type="restaurant">
            {getDescription(description)}
          </S.Description>
          <S.Button type="restaurant">
            <Link to={`/profile/${id}`}>Saiba mais</Link>
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
        <S.Description type="product">
          {getDescription(description)}
        </S.Description>
        <S.Button type="product" onClick={modalIsVisible}>
          Mais detalhes
        </S.Button>
      </S.Container>
    </S.Card>
  )
}

export default Product
