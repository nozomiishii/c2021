import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>NOZOMI ISHII</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="mb-4 text-4xl">🦸🏻‍♂️: 2021年版のホームページ制作はじめました！</div>
        <div className="mb-4">
          <div className="mb-2 hover:text-green-600">
            <Link href="/blog">
              <a>ブログをのぞく</a>
            </Link>
          </div>
          <div className="mb-2 hover:text-green-600">
            <a href="https://relaxed-edison-03ff06.netlify.app/">2020年版にいく</a>
          </div>
        </div>
        <div>©2021 NOZOMI ISHII</div>
      </div>
    </>
  );
};

export default Home;
