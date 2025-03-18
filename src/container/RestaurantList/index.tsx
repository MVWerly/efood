import Product from '../../components/Product'
import { List } from './styles'
import { Restaurant } from '../../pages/Home'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
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

  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Product
              type="restaurant"
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
