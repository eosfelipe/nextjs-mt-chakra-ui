import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { customTheme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <DefaultSeo
        title="Major Tom website"
        description="Website crafted with love"
        canonical="https://www.majortom.space/"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://majortom.space/',
          site_name: 'MajorTom'
        }}
        twitter={{
          handle: '@majortom',
          site: '@majortom',
          cardType: 'summary_large_image'
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
