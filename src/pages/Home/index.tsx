import Hero from '../../container/Hero'
import RestaurantList from '../../container/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurant } = useGetRestaurantQuery()

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurant} />
    </>
  )
}

export default Home
