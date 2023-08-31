import { FC, FormEvent } from 'react';
import { Box, Stack } from '@mui/system';
import classNames from 'classnames';

import styles from './Form.module.css';
import iconSend from '../../aseets/img/send.png';
import iconAttach from '../../aseets/img/attach.png';

interface IForm {
  hidden: boolean;
}

export const Form: FC<IForm> = ({ hidden }) => {
  const formClass = classNames({
    [styles.hidden]: hidden,
  });

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <Box component='form' py={2} onSubmit={onSubmit} className={formClass}>
      <textarea className={styles.entryField} placeholder='Введите сообщение' />
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
