import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const HeroContainer = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 54rem;
  align-items: center;

  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 6px ${(props) => props.theme['base-text']}10;

  transform: translateY(-41%);

  > img {
    border-radius: 8px;
    max-width: 9.5rem;
    max-height: 9.5rem;
    margin-right: 2rem;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  height: 9.5rem;
  width: 100%;
  padding-top: 0.5rem;

  > div {
    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        color: ${(props) => props.theme['base-title']};
        ${mixins.fonts.titleL}
      }

      a {
        ${mixins.fonts.link}
        text-decoration: none;

        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        color: ${(props) => props.theme.blue};
      }
    }

    > p {
      color: ${(props) => props.theme['base-text']};
      ${mixins.fonts.textM}
    }
  }
`

export const HeroFooter = styled.ul`
  display: flex;

  li {
    display: flex;
    gap: 0.25rem;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};

    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }

    span {
      ${mixins.fonts.textM}
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
