import Head from 'next/head';
import { Loading, Header } from 'src/components';
import dynamic from 'next/dynamic';
import React from 'react';

const ColorBeam = dynamic(() => import('../art/ColorBeam'), {
  loading: Loading,
  ssr: false,
});

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Page not found | NOZOMI ISHII</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isFullScreen />
      <ColorBeam />
      <footer className="absolute bottom-0 right-0 flex justify-end p-4 text-white">
        <p className="select-none">©2020 NOZOMI ISHII</p>
      </footer>
    </>
  );
};

export default Custom404;
