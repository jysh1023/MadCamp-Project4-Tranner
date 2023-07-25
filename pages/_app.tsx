import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Script from 'next/script'

const colors = {
  brand: {
  }
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
      <Script strategy='beforeInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=oe1nc3j5z5" />
    </ChakraProvider>
  )
}

export default MyApp