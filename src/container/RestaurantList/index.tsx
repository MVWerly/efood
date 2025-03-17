import Product from '../../components/Product'
import { List } from './styles'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Product
            type="restaurant"
            title={restaurant.title}
            grade={restaurant.grade}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
          />
        </li>
      ))}
    </List>
  </div>
)

export default RestaurantList
