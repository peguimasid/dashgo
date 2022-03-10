import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
