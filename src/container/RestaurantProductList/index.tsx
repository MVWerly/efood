import { List } from './styles'
import Product from '../../components/Product'
import ProductModel from '../../models/Product'

type Props = {
  products: ProductModel[]
}

const RestaurantProductList = ({ products }: Props) => (
  <List className="container">
    {products.map((product) => (
      <li key={product.id}>
        <Product
          type="product"
          title={product.title}
          description={product.description}
          image={product.image}
        />
      </li>
    ))}
  </List>
)

export default RestaurantProductList
