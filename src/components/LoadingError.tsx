import React from 'react';

import { Stack } from '@mui/system';

export const LoadingError = () => {
  return (
    <Stack height='100%' alignItems='center' justifyContent='center'>
      <h2 style={{ marginBottom: 20 }}>Что-то пошло не так...</h2>
      <p>Попробуйте зайти позже!</p>
    </Stack>
  );
};
