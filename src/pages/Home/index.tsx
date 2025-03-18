import Hero from '../../container/Hero'
import RestaurantList from '../../container/RestaurantList'

import { useEffect, useState } from 'react'

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
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

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
