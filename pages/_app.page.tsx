import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createEmotionCache from '../styles/createEmotionCache'
import { CssBaseline } from '@mui/material'
import theme from '../styles/theme'

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
