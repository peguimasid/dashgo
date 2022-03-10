import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

import { theme } from '../styles/theme';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
