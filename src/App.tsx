import { Box, Container, Stack } from '@mui/system';

import { Messages } from './pages/Messages/Messages';
import { ChatList } from './pages/ChatList/ChatList';
import { MobileInfo } from './components/mobileInfo/MobileInfo';

export const App = () => {
  const containerClass = {
    boxShadow: '0px 4px 8px 2px rgba(30, 31, 32, 0.21)',
    borderRadius: 1,
  };

  return (
    <Box p={2}>
      <Container maxWidth='xl' sx={containerClass} disableGutters={true}>
        <Stack direction='row' height='95vh'>
          <ChatList />
          <Messages />
          <MobileInfo />
        </Stack>
      </Container>
    </Box>
  );
};
