import { useParams } from 'react-router-dom'

import RestaurantProductList from '../../container/RestaurantProductList'
import RestaurantProfile from '../../container/RestaurantProfile'

import { useGetRestaurantProfileQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()

  if (id === undefined) {
    throw new Error('ID incorreto')
  }

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
