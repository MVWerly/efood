import Hero from '../../container/Hero'
import RestaurantList from '../../container/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

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
