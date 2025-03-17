import { Background } from './styles'

export type Props = {
  children: JSX.Element
  image: string
  height: string
  padding: string
}

const BackgroundImage = ({ children, image, height, padding }: Props) => (
  <Background
    padding={padding}
    height={height}
    style={{ backgroundImage: `url(${image})` }}
  >
    {children}
  </Background>
)

export default BackgroundImage
