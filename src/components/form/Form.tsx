import React from 'react';
import { Box, Stack } from '@mui/system';
import iconSend from '../../aseets/img/send.png';
import iconAttach from '../../aseets/img/attach.png';
import styles from './Form.module.css';

export const Form = () => {
  //Исправить тип ANY
  const onSubmit = (ev: any) => {
    ev.preventDefault();
  };

  return (
    <Box component='form' py={2} onSubmit={onSubmit}>
      <textarea className={styles.entryField} placeholder='Type Message' />
      <Stack direction='row' justifyContent='space-between' pt={0.5}>
        <button className={styles.attach}>
          <img src={iconAttach} alt='Attach' />
        </button>
        <button className={styles.send}>
          <img src={iconSend} alt='Send' />
        </button>
      </Stack>
    </Box>
  );
};
