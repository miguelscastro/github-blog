import { useContext } from 'react'
import cover from '../../assets/cover.png'
import logo from '../../assets/logo.svg'
import { Hero } from './Hero'
import { HeaderContainer } from './styles'
import { ProfileContext } from '../../contexts/ProfileContext'

export function Header() {
  const { user } = useContext(ProfileContext)

  return (
    <HeaderContainer>
      <figure>
        <img src={cover} />
        <img src={logo} />
      </figure>
      <Hero user={user} />
    </HeaderContainer>
  )
}
