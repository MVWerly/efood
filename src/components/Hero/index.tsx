import Logo from '../../components/Logo'
import BackgroundImage from '../../components/BackgroundImage'

import backgroundImg from '../../assets/images/background-vector.png'

import * as S from './styles'

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
