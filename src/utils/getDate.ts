import { addZero } from './addZero';

export const getDate = (seconds: number) => {
  const date = new Date(seconds * 1000);

  return {
    year: addZero(date.getFullYear()),
    month: addZero(date.getMonth() + 1),
    day: addZero(date.getDate()),
    hours: addZero(date.getHours()),
    min: addZero(date.getMinutes()),
  };
};
