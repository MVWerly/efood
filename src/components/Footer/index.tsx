import * as S from './styles'

import Logo from '../../components/Logo'
import BackgroundImage from '../../components/BackgroundImage'

import instagramImg from '../../assets/images/instagram.png'
import facebookImg from '../../assets/images/facebook.png'
import twitterImg from '../../assets/images/twitter.png'

const Footer = () => (
  <S.Footer>
    <BackgroundImage padding="40" height="298">
      <S.Container className="container">
        <div>
          <Logo />
          <S.ImgContainer>
            <img src={instagramImg} alt="Instagram" />
            <img src={facebookImg} alt="Instagram" />
            <img src={twitterImg} alt="Instagram" />
          </S.ImgContainer>
        </div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado
        </p>
      </S.Container>
    </BackgroundImage>
  </S.Footer>
)

export default Footer
