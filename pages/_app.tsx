import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Layout from '../components/Layout'

const colors = {
  brand : {
  }
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
