import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import Header from '@/components/Header'
import { CartContextProvider } from '@/contexts/CoffeesContext'

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
