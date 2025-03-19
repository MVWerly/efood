import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { RooReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../container/RestaurantProductList'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, products } = useSelector((state: RooReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }
  const removeProduct = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return products.reduce((acc, value) => {
      return (acc += value.preco)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {products.map((product) => (
            <S.CartItem key={product.id}>
              <img src={product.foto} />
              <div>
                <h3>{product.nome}</h3>
                <p>{formatPrice(product.preco)}</p>
              </div>
              <button type="button" onClick={() => removeProduct(product.id)} />
            </S.CartItem>
          ))}
        </ul>
        <p>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </p>
        <button>Continuar com a entrega</button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
