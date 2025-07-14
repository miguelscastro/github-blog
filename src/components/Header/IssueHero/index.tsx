import {
  ArrowSquareOutIcon,
  BuildingIcon,
  CaretLeftIcon,
  GithubLogoIcon,
  UsersIcon,
} from '@phosphor-icons/react'
import { IssueHeroContainer, IssueHeroContent, IssueHeroFooter } from './styles'
import type {
  issueProps,
  userProfileProps,
} from '../../../contexts/ProfileContext'
import { Link } from 'react-router-dom'

interface IssueHeroProps {
  user: userProfileProps
  issue?: issueProps
}

export function IssueHero({ user, issue }: IssueHeroProps) {
  return (
    <IssueHeroContainer>
      <IssueHeroContent>
        <div>
          <header>
            <Link to={'/'}>
              <CaretLeftIcon size={15} weight="bold" /> RETURN
            </Link>
            <a href={issue?.url}>
              CHECK AT GITHUB <ArrowSquareOutIcon size={15} weight="bold" />
            </a>
          </header>
          <h1>{issue?.title}</h1>
        </div>
        <IssueHeroFooter>
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
        </IssueHeroFooter>
      </IssueHeroContent>
    </IssueHeroContainer>
  )
}
