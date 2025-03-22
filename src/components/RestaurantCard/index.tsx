import { Link } from 'react-router-dom'

import { TagContainer } from '../Tag/styles'

import { capitalizeFirstLetter } from '../../utils'

import starImg from '../../assets/images/star.png'

import * as S from './styles'

type Props = {
  title: string
  infos: (string | boolean)[]
  description: string
  grade: number
  image: string
  id: number
}

const RestaurantCard = ({
  description,
  grade,
  id,
  image,
  infos,
  title
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 280) {
      return text.slice(0, 277) + '...'
    }
    return text
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

  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Infos>{containInfos()}</S.Infos>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Grade>
          {grade} <img src={starImg} alt="star" />
        </S.Grade>
        <S.Description>{getDescription(description)}</S.Description>
        <S.Button>
          <Link to={`/profile/${id}`}>Saiba mais</Link>
        </S.Button>
      </S.Container>
    </S.Card>
  )
}

export default RestaurantCard
