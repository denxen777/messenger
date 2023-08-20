import { TRootState } from './store';
import { createSelector } from '@reduxjs/toolkit';
import { getDate } from '../utils/getDate';
import { IMessageData } from '../api/interfaces';

const selectMessages = (state: TRootState) => state.messages.messages;

export const titleSelector = (state: TRootState) => state.messages.title;

export const messagesSelector = createSelector(selectMessages, messages => {
  const sortArr = messages.slice().sort((a, b) => a.created_at - b.created_at);
  //const newArr: [] | IMessageData[] = [];
  // for (let i = 0; i < sortArr.length; i++) {
  //   if (sortArr[i + 1]) {
  //     const currentData = getDate(sortArr[i].created_at);
  //     const str1 =
  //       currentData.day + '.' + currentData.month + '.' + currentData.year;
  //
  //     const nextData = getDate(sortArr[i + 1].created_at);
  //     const str2 = nextData.day + '.' + nextData.month + '.' + nextData.year;
  //
  //     if (str1 !== str2 || i === 0) {
  //       // @ts-ignore
  //       newArr.push(sortArr[i]);
  //     } else {
  //       // @ts-ignore
  //       newArr.push({ ...sortArr[i], created_at: 0 });
  //     }
  //   } else {
  //     const currentData = getDate(sortArr[i].created_at);
  //     const str1 =
  //       currentData.day + '.' + currentData.month + '.' + currentData.year;
  //
  //     const prevData = getDate(sortArr[i - 1].created_at);
  //     const str2 = prevData.day + '.' + prevData.month + '.' + prevData.year;
  //
  //     if (str1 !== str2) {
  //       // @ts-ignore
  //       newArr.push(sortArr[i]);
  //     } else {
  //       // @ts-ignore
  //       newArr.push({ ...sortArr[i], created_at: 0 });
  //     }
  //   }
  // }
  //return newArr;
});

const noDuplicateDates = (array: IMessageData[]) => {
  const newArr: [] | IMessageData[] = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      const currentData = getDate(array[i].created_at);
      const str1 =
        currentData.day + '.' + currentData.month + '.' + currentData.year;

      const nextData = getDate(array[i + 1].created_at);
      const str2 = nextData.day + '.' + nextData.month + '.' + nextData.year;

      if (str1 !== str2 || i === 0) {
        // @ts-ignore
        newArr.push(array[i]);
      } else {
        // @ts-ignore
        newArr.push({ ...array[i], created_at: 0 });
      }
    } else {
      const currentData = getDate(array[i].created_at);
      const str1 =
        currentData.day + '.' + currentData.month + '.' + currentData.year;

      const prevData = getDate(array[i - 1].created_at);
      const str2 = prevData.day + '.' + prevData.month + '.' + prevData.year;

      if (str1 !== str2) {
        // @ts-ignore
        newArr.push(array[i]);
      } else {
        // @ts-ignore
        newArr.push({ ...array[i], created_at: 0 });
      }
    }
  }

  return newArr;
};
