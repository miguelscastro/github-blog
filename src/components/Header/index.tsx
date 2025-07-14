import { useContext } from 'react'
import cover from '../../assets/cover.png'
import logo from '../../assets/logo.svg'
import { Hero } from './Hero'
import { HeaderContainer } from './styles'
import { ProfileContext } from '../../contexts/ProfileContext'
import { Link, useLocation } from 'react-router-dom'
import { IssueHero } from './IssueHero'

export function Header() {
  const { user } = useContext(ProfileContext)
  const { state } = useLocation()
  const location = useLocation()

  return (
    <HeaderContainer>
      <figure>
        <img src={cover} />
        <Link to={'/'}>
          <img src={logo} />
        </Link>
      </figure>
      {location.pathname.includes('/issues') ? (
        <IssueHero user={user} issue={state} />
      ) : (
        <Hero user={user} />
      )}
    </HeaderContainer>
  )
}
