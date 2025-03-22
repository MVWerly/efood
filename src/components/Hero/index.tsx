import BackgroundImage from '../../components/BackgroundImage'
import Logo from '../../components/Logo'
import * as S from './styles'
import backgroundImg from '../../assets/images/Vector.png'

const Hero = () => (
  <header>
    <BackgroundImage padding="40" height="360" image={backgroundImg}>
      <S.Container className="container">
        <Logo />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.Container>
    </BackgroundImage>
  </header>
)

export default Hero
