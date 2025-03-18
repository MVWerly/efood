import * as S from './styles'
import BackgroundImage from '../../components/BackgroundImage'
import Logo from '../../components/Logo'
import backgroundImg from '../../assets/images/Vector.png'
import { Restaurant } from '../../pages/Home'
import { capitalizeFirstLetter } from '../../components/Product'

type Props = {
  restaurant: Restaurant
}

const RestaurantProfile = ({ restaurant }: Props) => (
  <>
    <BackgroundImage padding="64" height="184" image={backgroundImg}>
      <S.Container className="container">
        <S.TitleSmall>Restaurantes</S.TitleSmall>
        <Logo />
        <S.TitleSmall>0 produto(s) no carrinho</S.TitleSmall>
      </S.Container>
    </BackgroundImage>
    <BackgroundImage overlay padding="25" height="280" image={restaurant.capa}>
      <div className="container">
        <S.Title>{capitalizeFirstLetter(restaurant.tipo)}</S.Title>
        <S.TitleBig>{restaurant.titulo}</S.TitleBig>
      </div>
    </BackgroundImage>
  </>
)

export default RestaurantProfile
