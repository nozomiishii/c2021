import { useEffect, useState } from 'react';
import { countDown, Time } from 'src/components';
import Head from 'next/head';

const Home: React.FC = () => {
  const endTime = '2021/01/11';
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

      <div className="bg-green-500 min-h-screen flex justify-center items-center">
        {count &&
          `${count.days}days ${count.hours}hours ${count.minutes}minutes ${count.seconds}seconds`}
      </div>
    </>
  );
};

export default Home;
