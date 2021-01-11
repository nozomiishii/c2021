import { useEffect, useState } from 'react';
import { countDown, Time } from 'src/components';

export const CountDown: React.FC = () => {
  const endTime = '2021-01-11 23:11:11';
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
    <div>
      {count ? (
        <h1 className="font-bold sm:text-sm md:text-6xl text-white">
          {count.days}
          <span className="sm:text-xs md:text-2xl">days</span>
          {count.hours}
          <span className="sm:text-xs md:text-2xl">hours</span>
          {count.minutes}
          <span className="sm:text-xs md:text-2xl">minutes</span>
          {count.seconds}
          <span className="sm:text-xs md:text-2xl">seconds</span>
        </h1>
      ) : (
        '👨🏻‍🚀'
      )}
    </div>
  );
};
