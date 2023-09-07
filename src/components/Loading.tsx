import React from 'react';

import { Box } from '@mui/system';
import preloader from '../aseets/img/preloader.gif';

export const Loading = () => {
  return (
    <Box
      display='flex'
      height='100%'
      alignItems='center'
      justifyContent='center'
    >
      <img src={preloader} alt='preloader' />
    </Box>
  );
};
