import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/tailwind.css';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-gray-800">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ x: '-100vw', transition: { ease: 'easeInOut', duration: 0.3 } }}
            className="bg-gray-100"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default MyApp;
