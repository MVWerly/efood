import RestaurantProductList from '../../container/RestaurantProductList'
import RestaurantProfile from '../../container/RestaurantProfile'
import Product from '../../models/Product'
import productImg from '../../assets/images/produto.png'

const productRestaurant: Product[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: productImg,
    id: 1
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: productImg,
    id: 2
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: productImg,
    id: 3
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: productImg,
    id: 4
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: productImg,
    id: 5
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: productImg,
    id: 6
  }
]

const Profile = () => (
  <>
    <RestaurantProfile />
    <RestaurantProductList products={productRestaurant} />
  </>
)

export default Profile
