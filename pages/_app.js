import { ChakraProvider } from '@chakra-ui/react';
import IndexFooter from '../components/IndexFooter';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <IndexFooter />
    </ChakraProvider>
  )
}

export default MyApp