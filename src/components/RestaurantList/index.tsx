import RestaurantCard from '../../components/RestaurantCard'
import Loader from '../Loader'

import { List } from './styles'

type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  const getInfos = (restaurant: Restaurant) => {
    const infos = []

    if (restaurant.destacado) {
      infos.push(restaurant.destacado)
    }

    if (restaurant.tipo) {
      infos.push(restaurant.tipo)
    }

    return infos
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <List>
        {restaurants &&
          restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <RestaurantCard
                title={restaurant.titulo}
                grade={restaurant.avaliacao}
                description={restaurant.descricao}
                image={restaurant.capa}
                infos={getInfos(restaurant)}
                id={restaurant.id}
              />
            </li>
          ))}
      </List>
    </div>
  )
}

export default RestaurantList
