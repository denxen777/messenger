import { FC, FormEvent, useState } from 'react';
import { Box, Stack } from '@mui/system';
import classNames from 'classnames';

import styles from './Form.module.css';
import iconSend from '../../aseets/icons/send.png';
import iconAttach from '../../aseets/icons/attach.png';

interface IForm {
  hidden: boolean;
}

export const Form: FC<IForm> = ({ hidden }) => {
  const [value, setValue] = useState('');

  const formClass = classNames({
    [styles.hidden]: hidden,
  });

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    alert('Недоступно');
    setValue('');
  };

  return (
    <Box
      component='form'
      py={2}
      px={3}
      onSubmit={onSubmit}
      className={formClass}
    >
      <textarea
        className={styles.entryField}
        placeholder='Введите сообщение'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
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
