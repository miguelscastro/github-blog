import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const IssueContainer = styled.main`
  max-width: 864px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    max-width: 352px;
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
`

export const MarkdownWrapper = styled.div`
  &.markdown-body {
    background: ${(props) => props.theme['base-background']};
    p {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme['base-text']}
    }
    code {
      background-color: ${(props) => props.theme['base-post']};
      color: ${(props) => props.theme['blue']};
    }
    pre {
      background-color: ${(props) => props.theme['base-post']};
      color: #fff;
      padding: 1rem;
      border-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    max-width: 352px;

    &.markdown-body {
      p {
        ${mixins.fonts.textS}
        color: ${(props) => props.theme['base-text']}
      }
      code {
        ${mixins.fonts.textS}
        background-color: ${(props) => props.theme['base-post']};
        color: ${(props) => props.theme['blue']};
      }
      pre {
        ${mixins.fonts.textS}
        background-color: ${(props) => props.theme['base-post']};
        color: #fff;
        padding: 1rem;
        border-radius: 6px;
      }
    }
  }
`
