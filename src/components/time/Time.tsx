import { Stack } from '@mui/system';
import styles from './Time.module.css';
import { FC } from 'react';
import { getDate } from '../../utils/getDate';

interface ITime {
  time: number;
  incoming: boolean;
}

export const Time: FC<ITime> = ({ time, incoming }) => {
  const { hours, min } = getDate(time);

  return (
    <Stack ml={1.5} direction='row' spacing={0.5} alignItems='center'>
      <p className={styles.time}>
        {hours}:{min}
      </p>
      <p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='10'
          viewBox='0 0 16 10'
          fill='none'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3.71942 8.46433L1.01932 5.20977C0.805292 4.95178 0.436584 4.92854 0.195794 5.15787C-0.044996 5.38719 -0.0666847 5.78223 0.147351 6.04022L3.25846 9.79025C3.48144 10.059 3.8696 10.0712 4.10692 9.81692L5.55182 8.26883L6.81402 9.79025C7.037 10.059 7.42516 10.0712 7.66248 9.81692L15.8292 1.06694C16.057 0.822864 16.057 0.427136 15.8292 0.183058C15.6013 -0.0610194 15.232 -0.0610194 15.0042 0.183058L7.27498 8.46433L6.3782 7.38342L12.2736 1.06694C12.5014 0.822864 12.5014 0.427136 12.2736 0.183058C12.0458 -0.0610194 11.6764 -0.0610194 11.4486 0.183058L5.60178 6.44755L4.7754 7.33296L3.71942 8.46433Z'
            fill={!incoming ? 'none' : '#407EC9'}
          />
        </svg>
      </p>
    </Stack>
  );
};
