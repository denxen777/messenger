import { IMessageData } from '../api/interfaces';
import { getDate } from './getDate';

export const dateFilter = (array: IMessageData[]) => {
  const result: IMessageData[] = [];

  for (let i = 0; i < array.length; i++) {
    const currentDataObj = getDate(array[i].created_at);
    const currentData = `${currentDataObj.day}.${currentDataObj.month}.${currentDataObj.year}`;

    const prevDataObj = getDate(array[i - 1]?.created_at);
    const prevData = `${prevDataObj.day}.${prevDataObj.month}.${prevDataObj.year}`;

    if (currentData !== prevData || i === 0) {
      result.push(array[i]);
    } else {
      result.push({ ...array[i], created_at: 0 });
    }
  }
  return result;
};
