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
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme['base-subtitle']};
    }

    > span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
  margin-top: 3rem;
`
