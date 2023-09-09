import { Box } from '@mui/system';
import { FC } from 'react';
import classNames from 'classnames';

import styles from './Avatar.module.css';

interface IAvatar {
  avatar: string;
  size: 'small' | 'large';
}

export const Avatar: FC<IAvatar> = ({ avatar, size = 'large' }) => {
  const avatarClass = classNames({
    [styles.hidden]: !avatar,
  });

  return (
    <Box className={avatarClass}>
      <img
        className={classNames(styles.avatar, styles[size])}
        src={avatar}
        alt='Avatar'
      />
    </Box>
  );
};
