import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantQuery()

  return (
    <>
      <Hero />
      <RestaurantList isLoading={isLoading} restaurants={restaurants} />
    </>
  )
}

export default Home
