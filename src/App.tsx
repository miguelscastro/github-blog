import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProfileProvider } from './contexts/ProfileContext'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <ProfileProvider>
            <Router />
          </ProfileProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
