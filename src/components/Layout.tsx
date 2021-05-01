import Head from 'next/head';
import React from 'react';
import { Header } from '.';

interface P {
  title?: string;
}

export const Layout: React.FC<P> = ({ title = 'NOZOMI ISHII', children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="pt-14">{children}</div>
      {/* <Footer /> */}
    </>
  );
};
