import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Checkout from '../Checkout'

import { RooReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import closeIcon from '../../assets/images/close.png'

import * as S from './styles'

const Cart = () => {
  const [checkout, setCheckout] = useState(false)
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
    <>
      {checkout ? (
        <>
          <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay />
            <S.Sidebar>
              <Checkout
                backToCart={() => setCheckout(false)}
                paymentFinalized={() => setCheckout(false)}
              />
            </S.Sidebar>
          </S.CartContainer>
        </>
      ) : (
        <>
          <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.Sidebar>
              <img src={closeIcon} onClick={closeCart} />
              <ul>
                {products.map((product) => (
                  <S.CartItem key={product.id}>
                    <img src={product.foto} />
                    <div>
                      <h3>{product.nome}</h3>
                      <p>{formatPrice(product.preco)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProduct(product.id)}
                    />
                  </S.CartItem>
                ))}
              </ul>
              <p>
                Valor total <span>{formatPrice(getTotalPrice())}</span>
              </p>
              <button onClick={() => setCheckout(true)}>
                Continuar com a entrega
              </button>
            </S.Sidebar>
          </S.CartContainer>
        </>
      )}
    </>
  )
}

export default Cart
