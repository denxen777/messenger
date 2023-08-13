import { addZero } from './addZero';

export const getDate = (seconds: number) => {
  const date = new Date(seconds * 1000);

  const year = addZero(date.getFullYear());
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const min = addZero(date.getMinutes());

  return {
    year,
    month,
    day,
    hours,
    min,
  };
};
