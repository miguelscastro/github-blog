import { useContext } from 'react'
import cover from '../../assets/cover.png'
import logo from '../../assets/logo.svg'
import { Hero } from './Hero'
import { HeaderContainer } from './styles'
import { ProfileContext, type issueProps } from '../../contexts/ProfileContext'
import { Link } from 'react-router-dom'
import { IssueHero } from './IssueHero'

interface HeaderProps {
  uri?: string
  issue?: issueProps
}

export function Header({ issue, uri }: HeaderProps) {
  const { user } = useContext(ProfileContext)

  return (
    <HeaderContainer>
      <figure>
        <img src={cover} />
        <Link to={'/'}>
          <img src={logo} />
        </Link>
      </figure>
      {uri?.includes('issues') ? (
        <IssueHero user={user} issue={issue} />
      ) : (
        <Hero user={user} />
      )}
    </HeaderContainer>
  )
}
