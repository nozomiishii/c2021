import Head from 'next/head';
import { Loading, NavbarBgBlack } from 'src/components';
import dynamic from 'next/dynamic';

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
      <NavbarBgBlack />
      <ColorBeam />
      <footer className="absolute bottom-0 right-0 flex justify-end p-4 text-white">
        <p className="select-none">©2020 NOZOMI ISHII</p>
      </footer>
    </>
  );
};

export default Custom404;
