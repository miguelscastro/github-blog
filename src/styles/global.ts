import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus-visible {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing:antialiased;
    }

    body, input, textarea, button {
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
