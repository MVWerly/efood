import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import RestaurantProductList from '../../container/RestaurantProductList'
import RestaurantProfile from '../../container/RestaurantProfile'

import { Restaurant } from '../Home'

const Profile = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
