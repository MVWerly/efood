import { useState } from 'react'

import * as S from './styles'
import Product from '../../components/Product'

import close from '../../assets/images/close.png'
import { Restaurant } from '../../pages/Home'

type Product = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
}

type Props = {
  restaurant: Restaurant
}

const RestaurantProductList = ({ restaurant }: Props) => {
  const [modal, setModal] = useState(false)
  const [product, setProduct] = useState<Product>({
    id: 0,
    nome: '',
    foto: '',
    descricao: '',
    preco: 0,
    porcao: ''
  })

  const openModal = (product: Product) => {
    setProduct(product)
    setModal(true)
  }

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <S.List className="container">
        {restaurant.cardapio.map((product) => (
          <li key={product.id}>
            <Product
              type="product"
              title={product.nome}
              description={product.descricao}
              image={product.foto}
              modalIsVisible={() => openModal(product)}
            />
          </li>
        ))}
      </S.List>
      <S.Modal className={modal ? 'visible' : ''}>
        <S.ModalContent className="container">
          <img src={close} onClick={() => setModal(false)} />
          <div>
            <img src={product.foto} />
          </div>
          <S.DescriptionContainer>
            <h4>{product.nome}</h4>
            <p>{product.descricao}</p>
            <p>Serve: {product.porcao}</p>
            <S.AddButton>
              Adicionar ao carrinho - {formatPrice(product.preco)}
            </S.AddButton>
          </S.DescriptionContainer>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Modal>
    </>
  )
}

export default RestaurantProductList
