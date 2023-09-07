import React, { FC } from 'react';
import styles from './Sticker.module.css';

interface ISticker {
  countUnread: number;
}

export const Sticker: FC<ISticker> = ({ countUnread }) => {
  return (
    <div className={styles.sticker}>
      <p className={styles.countUnread}>{countUnread}</p>
    </div>
  );
};
