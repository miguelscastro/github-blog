import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const IssueHeroContainer = styled.section`
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

  @media (max-width: 768px) {
    max-width: 22rem;

    padding: 2rem 2.5rem;
    transform: translateY(-10%);

    > img {
      display: none;
    }
  }
`

export const IssueHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  padding-top: 0.5rem;

  > div {
    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;

      a {
        ${mixins.fonts.link}
        text-decoration: none;

        display: flex;
        align-items: flex-start;
        gap: 0.5rem;

        color: ${(props) => props.theme.blue};

        margin-bottom: 1px;
        transition: 0.2s;

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
          transition: 0.2s;
        }
      }
    }

    h1 {
      color: ${(props) => props.theme['base-title']};
      ${mixins.fonts.titleL}
    }
  }

  @media (max-width: 768px) {
    height: 8.5rem;

    > div {
      > header {
        a {
          ${mixins.fonts.link}
        }
      }

      > h1 {
        ${mixins.fonts.titleS}
      }
    }
  }
`

export const IssueHeroFooter = styled.ul`
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

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    li {
      &:not(:last-of-type) {
        margin-right: 0.5rem;
      }

      span {
        ${mixins.fonts.link}
      }

      svg {
        color: ${(props) => props.theme['base-label']};
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }
`
