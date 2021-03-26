import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
