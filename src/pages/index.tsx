import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { NavbarBgBlack } from 'src/components/Navbar/NavbarBgBlack';

const Loading = () => <p>Loading ...</p>;
const DanceCodeArt = dynamic(() => import('../components/DanceCodeArt'), {
  loading: Loading,
  ssr: false,
});

const Home: React.FC = () => (
  <>
    <Head>
      <title>NOZOMI ISHII = Dance + Code + Art</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavbarBgBlack />
    <DanceCodeArt />
    <footer className="absolute bottom-0 right-0 flex justify-end p-4 text-white">
      <p>©2020 NOZOMI ISHII</p>
    </footer>
  </>
);
export default Home;
