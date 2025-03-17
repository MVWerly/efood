import Hero from '../../container/Hero'
import RestaurantList from '../../container/RestaurantList'
import Restaurant from '../../models/Restaurant'

import japanese from '../../assets/images/japanese.png'
import italian from '../../assets/images/italian.png'

const homeRestaurants: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    grade: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japanese,
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    grade: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italian,
    id: 2
  },
  {
    title: 'Hioki Sushi',
    grade: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: japanese,
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria',
    grade: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: italian,
    id: 4
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurants={homeRestaurants} />
  </>
)

export default Home
