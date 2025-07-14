import {
  ArrowSquareOutIcon,
  BuildingIcon,
  GithubLogoIcon,
  UsersIcon,
} from '@phosphor-icons/react'
import { HeroContainer, HeroContent, HeroFooter } from './styles'
import type { userProfileProps } from '../../../contexts/ProfileContext'

interface HeroProps {
  user?: userProfileProps
}

export function Hero({ user }: HeroProps) {
  return (
    <HeroContainer>
      <img src={user?.avatar_url} />
      <HeroContent>
        <div>
          <header>
            <h1>{user?.name}</h1>
            <a href={user?.html_url}>
              GITHUB <ArrowSquareOutIcon size={15} weight="fill" />
            </a>
          </header>
          <p>{user?.bio}</p>
        </div>
        <HeroFooter>
          <li>
            <GithubLogoIcon weight="fill" size={25} />
            <span>{user?.login}</span>
          </li>
          <li>
            <BuildingIcon weight="fill" size={25} />{' '}
            <span>{user?.location}</span>
          </li>
          <li>
            <UsersIcon weight="fill" size={25} />{' '}
            <span>{user?.followers} Followers</span>
          </li>
        </HeroFooter>
      </HeroContent>
    </HeroContainer>
  )
}
