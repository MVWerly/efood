import * as S from './styles'
import starImg from '../../assets/images/estrela.png'
import { TagContainer } from '../Tag/styles'

const Product = () => (
  <S.Card>
    <img src="https://placehold.co/472x217" alt="Product" />
    <S.Infos>
      <TagContainer>Destaque da semana</TagContainer>
      <TagContainer>Japonesa</TagContainer>
    </S.Infos>
    <S.Container>
      <S.Title>Hioki Sushi</S.Title>
      <S.Grade>
        4.9 <img src={starImg} alt="star" />
      </S.Grade>
      <S.Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        nihil error at excepturi quae iure libero rerum ab distinctio fugit
        praesentium, accusamus alias provident sint minima consequuntur. Aut,
        assumenda minus?
      </S.Description>
      <S.Button>Saiba mais</S.Button>
    </S.Container>
  </S.Card>
)

export default Product
