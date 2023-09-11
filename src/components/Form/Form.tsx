import { FC, MouseEvent, useState } from 'react';
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

  const onSubmit = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    alert('Недоступно');
    setValue('');
  };

  return (
    <Box component='form' py={2} px={3} className={formClass}>
      <textarea
        className={styles.entryField}
        placeholder='Введите сообщение'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Stack direction='row' justifyContent='space-between' pt={0.5}>
        <button className={styles.attach} onClick={ev => ev.preventDefault()}>
          <img src={iconAttach} alt='Attach' />
        </button>
        <button className={styles.send} onClick={ev => onSubmit(ev)}>
          <img src={iconSend} alt='Send' />
        </button>
      </Stack>
    </Box>
  );
};
