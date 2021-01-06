import { useEffect, useState } from 'react';
import { countDown, Time } from 'src/components';
import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  const endTime = '2021-01-11';
  const [count, setCount] = useState<Time>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(countDown(endTime));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>the day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
        <div className="mb-4">
          {count ? (
            <h1 className="font-bold text-6xl text-white">
              {count.days}
              <span className="text-2xl">days</span>
              {count.hours}
              <span className="text-2xl">hours</span>
              {count.minutes}
              <span className="text-2xl">minutes</span>
              {count.seconds}
              <span className="text-2xl">seconds</span>
            </h1>
          ) : (
            '👨🏻‍🚀'
          )}
        </div>
        <div>
          <Link href="/notion">
            <a className="text-white">Go to Blog page</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
