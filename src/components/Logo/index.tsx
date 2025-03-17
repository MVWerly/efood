import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.png'
import { Image } from './styles'

const Logo = () => (
  <Link to="/">
    <Image src={logoImg} alt="Efood" />
  </Link>
)

export default Logo
