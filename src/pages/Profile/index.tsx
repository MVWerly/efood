import { useParams } from 'react-router-dom'

import RestaurantProfile from '../../components/RestaurantProfile'
import RestaurantProductList from '../../components/RestaurantProductList'

import { useGetRestaurantProfileQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as RestaurantParams

  const { data: restaurant } = useGetRestaurantProfileQuery(id)

  if (!restaurant) {
    return <h3>Carregando..</h3>
  }

  return (
    <>
      <RestaurantProfile restaurant={restaurant} />
      <RestaurantProductList restaurant={restaurant} />
    </>
  )
}

export default Profile
