import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const CardContainer = styled.button`
  max-width: 416px;
  max-height: 260px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  cursor: pointer;
  border: none;
  text-align: start;
  transition: 0.2s;

  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    transition: 0.2s;
  }

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
      text-align: right;
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

  @media (max-width: 1440px) {
    max-width: 365px;
    max-height: 260px;

    > header {
      > h3 {
        ${mixins.fonts.textM}
        font-weight: bold;
      }

      > span {
        ${mixins.fonts.textS}
      }
    }

    p {
      ${mixins.fonts.textS}
      font-weight: normal;

      -webkit-line-clamp: 3;
    }
  }

  @media (max-width: 768px) {
    max-width: 326px;
    max-height: 220px;

    > header {
      > h3 {
        ${mixins.fonts.textS}
        font-weight: bold;
      }

      > span {
        ${mixins.fonts.link}
      }
    }

    p {
      ${mixins.fonts.link}
      font-weight: normal;

      -webkit-line-clamp: 3;
    }
  }
`
