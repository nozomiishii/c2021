export interface Time {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * endTime format should be like '2030/05/09'
 * https://qiita.com/kodama321/items/834f5fb721b533b73fa9
 */
export const countDown = (endTime: string): Time => {
  const regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  if (!regex.test(endTime)) {
    console.warn('invalid endTime format');
    return;
  }

  const now = new Date().toISOString();
  const end = new Date(endTime).toISOString();

  const total = (Date.parse(end) - Date.parse(now)) / 1000; // convert 1000ms to 1s
  const days = Math.floor(total / (60 * 60 * 24));
  const hours = Math.floor((total / (60 * 60)) % 24);
  const minutes = Math.floor((total / 60) % 60);
  const seconds = Math.floor(total % 60);

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};
