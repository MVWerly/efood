import * as S from './styles'
import BackgroundImage from '../../components/BackgroundImage'
import Logo from '../../components/Logo'
import backgroundImg from '../../assets/images/Vector.png'
import bannerImage from '../../assets/images/banner.png'

const RestaurantProfile = () => (
  <>
    <BackgroundImage padding="64" height="184" image={backgroundImg}>
      <S.Container className="container">
        <S.TitleSmall>Restaurantes</S.TitleSmall>
        <Logo />
        <S.TitleSmall>0 produto(s) no carrinho</S.TitleSmall>
      </S.Container>
    </BackgroundImage>
    <BackgroundImage padding="25" height="280" image={bannerImage}>
      <div className="container">
        <S.Title>Italiana</S.Title>
        <S.TitleBig>La Dolce Vita Trattoria</S.TitleBig>
      </div>
    </BackgroundImage>
  </>
)

export default RestaurantProfile
