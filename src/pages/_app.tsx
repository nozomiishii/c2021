import type { AppProps } from 'next/app';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
