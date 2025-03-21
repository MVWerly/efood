import { useState } from 'react'
import { useDispatch } from 'react-redux'

import ProductCard from '../../components/ProductCard'
import close from '../../assets/images/close.png'

import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const RestaurantProductList = ({ restaurant }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [productModal, setProductModal] = useState<Product>()

  const openModal = (product: Product) => {
    setProductModal(product)
    setModal(true)
  }

  const addToCart = () => {
    if (productModal) {
      dispatch(add(productModal))
      setModal(false)
      dispatch(open())
    }
  }

  return (
    <>
      <S.List className="container">
        {restaurant.cardapio.map((product) => (
          <li key={product.id}>
            <ProductCard
              title={product.nome}
              description={product.descricao}
              image={product.foto}
              modalIsVisible={() => openModal(product)}
            />
          </li>
        ))}
      </S.List>
      {productModal && (
        <>
          <S.Modal className={modal ? 'visible' : ''}>
            <S.ModalContent className="container">
              <img src={close} onClick={() => setModal(false)} />
              <div>
                <img src={productModal.foto} />
              </div>
              <S.DescriptionContainer>
                <h4>{productModal.nome}</h4>
                <p>{productModal.descricao}</p>
                <p>Serve: {productModal.porcao}</p>
                <S.AddButton onClick={addToCart}>
                  Adicionar ao carrinho - {formatPrice(productModal.preco)}
                </S.AddButton>
              </S.DescriptionContainer>
            </S.ModalContent>
            <div className="overlay" onClick={() => setModal(false)}></div>
          </S.Modal>
        </>
      )}
    </>
  )
}

export default RestaurantProductList
