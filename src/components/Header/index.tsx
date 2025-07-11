import cover from '../../assets/cover.png'
import logo from '../../assets/logo.svg'
import { Hero } from './Hero'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <figure>
        <img src={cover} />
        <img src={logo} />
      </figure>
      <Hero />
    </HeaderContainer>
  )
}
