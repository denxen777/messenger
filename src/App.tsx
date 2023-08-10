import { Box, Container, CssBaseline } from '@mui/material';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={'xl'}>
        <Box sx={{ bgcolor: '#a1c2d1', height: '50vh' }}></Box>
      </Container>
    </>
  );
};
