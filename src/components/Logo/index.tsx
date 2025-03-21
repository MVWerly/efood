import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
import { Image } from './styles'

const Logo = () => (
  <Link to="/">
    <h1>
      <Image src={logoImg} alt="Efood" />
    </h1>
  </Link>
)

export default Logo
