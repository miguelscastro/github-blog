import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const ProfileContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 4.5rem 18rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    > h1 {
      ${mixins.fonts.titleM}
      color: ${(props) => props.theme['base-subtitle']};
    }

    > span {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme['base-span']};
    }
  }
  @media (max-width: 1440px) {
    margin: 0 auto;
    max-width: 864px;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 380px;

    > div {
      margin-bottom: 0.5rem;

      > h1 {
        ${mixins.fonts.titleS}
      }

      > span {
        ${mixins.fonts.textS}
      }
    }
  }
`

export const PostsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`
