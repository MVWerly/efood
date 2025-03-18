import { Background } from './styles'

export type Props = {
  children: JSX.Element
  image?: string
  height: string
  padding: string
  overlay?: boolean
}

const BackgroundImage = ({
  children,
  image,
  height,
  padding,
  overlay = false
}: Props) => (
  <Background
    overlay={overlay}
    padding={padding}
    height={height}
    style={{ backgroundImage: `url(${image})` }}
  >
    {children}
  </Background>
)

export default BackgroundImage
