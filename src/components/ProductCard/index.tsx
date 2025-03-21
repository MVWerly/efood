import * as S from './styles'

export type Props = {
  title: string
  description: string
  image: string
  modalIsVisible?: () => void
}

const ProductCard = ({ title, image, description, modalIsVisible }: Props) => {
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
      <S.Button onClick={modalIsVisible}>Mais detalhes</S.Button>
    </S.Card>
  )
}

export default ProductCard
