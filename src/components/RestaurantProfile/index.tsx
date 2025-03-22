import { useDispatch, useSelector } from 'react-redux'

import BackgroundImage from '../../components/BackgroundImage'
import Logo from '../../components/Logo'

import { open } from '../../store/reducers/cart'
import { RooReducer } from '../../store'
import { capitalizeFirstLetter } from '../../utils'

import backgroundImg from '../../assets/images/background-vector.png'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantProfile = ({ restaurant }: Props) => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: RooReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <BackgroundImage padding="64" height="184" image={backgroundImg}>
        <S.Container className="container">
          <S.TitleSmall>Restaurantes</S.TitleSmall>
          <Logo />
          <S.TitleSmall role="button" onClick={openCart}>
            {products.length} produto(s)<span> no carrinho</span>
          </S.TitleSmall>
        </S.Container>
      </BackgroundImage>
      <BackgroundImage
        overlay
        padding="25"
        height="280"
        image={restaurant.capa}
      >
        <div className="container">
          <S.Title>{capitalizeFirstLetter(restaurant.tipo)}</S.Title>
          <S.TitleBig>{restaurant.titulo}</S.TitleBig>
        </div>
      </BackgroundImage>
    </>
  )
}

export default RestaurantProfile
