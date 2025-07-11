import styled from 'styled-components'

export const HeaderContainer = styled.header`
  > figure {
    position: relative;

    img:first-of-type {
      width: 100vw;
      height: 18.5rem;
    }
    img:last-of-type {
      max-height: 98px;
      max-width: 148px;

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
`
