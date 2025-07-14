import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 100%;
  max-height: 27rem;

  > figure {
    position: relative;

    img:first-of-type {
      width: 100%;
      height: 18.5rem;
    }
    a img {
      max-height: 6.125rem;
      max-width: 9.25rem;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -85%);
    }
  }

  > div {
    margin: 0 auto;
    max-width: 1440px;
  }

  @media (max-width: 768px) {
    > figure {
      img:first-of-type {
        height: 10.5rem;
      }

      a img {
        transform: translate(-50%, -50%);
      }
    }
  }
`
