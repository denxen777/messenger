import React from 'react';

import { Box } from '@mui/system';

export const LoadingError = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      height='100%'
      alignItems='center'
      justifyContent='center'
    >
      <h2 style={{ marginBottom: 20 }}>Что-то пошло не так...</h2>
      <p>Попробуйте зайти позже!</p>
    </Box>
  );
};
