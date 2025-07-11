import {
  ArrowSquareOutIcon,
  BuildingIcon,
  GithubLogoIcon,
  UsersIcon,
} from '@phosphor-icons/react'
import { HeroContainer, HeroContent, HeroFooter } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <img src="https://github.com/miguelscastro.png" />
      <HeroContent>
        <header>
          <h1>Miguel Castro</h1>
          <a href="https://github.com/miguelscastro">
            GITHUB <ArrowSquareOutIcon size={15} weight="fill" />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <HeroFooter>
          <li>
            <GithubLogoIcon weight="fill" size={25} />
            <span>miguelscastro</span>
          </li>
          <li>
            <BuildingIcon weight="fill" size={25} /> <span>Santos - SP</span>
          </li>
          <li>
            <UsersIcon weight="fill" size={25} /> <span>9 seguidores</span>
          </li>
        </HeroFooter>
      </HeroContent>
    </HeroContainer>
  )
}
