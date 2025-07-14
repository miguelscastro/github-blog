import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const CardContainer = styled.div`
  max-width: 416px;
  max-height: 260px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  > header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > h3 {
      ${mixins.fonts.titleM}
      color: ${(props) => props.theme['base-title']};
      max-width: 15.625rem;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme['base-text']};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
