import 'swiper/swiper-bundle.css';
import '../styles/globals.scss';
import '../styles/custom.scss';
import type { AppProps } from 'next/app';

const App = ({
  Component,
  pageProps,
}: AppProps) => (

  <Component {...pageProps} />
);

export default App;
