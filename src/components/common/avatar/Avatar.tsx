import { Box } from '@mui/system';
import { FC } from 'react';
import styles from './Avatar.module.css';

interface IAvatar {
  avatar: string;
  size: 'small' | 'large';
}

export const Avatar: FC<IAvatar> = ({ avatar, size = 'large' }) => {
  return (
    <Box className={avatar === '' ? styles.hidden : ''}>
      <img
        className={styles.avatar + ' ' + styles[size]}
        src={avatar}
        alt='Аватар'
      />
    </Box>
  );
};
