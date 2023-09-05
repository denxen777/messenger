import { Container, Stack } from '@mui/system';

import { ChatList } from './pages/chatList/ChatList';
import { Messages } from './pages/messages/Messages';

export const App = () => {
  return (
    <Container maxWidth='xl'>
      <Stack direction='row' height='100%'>
        <ChatList />
        <Messages />
      </Stack>
    </Container>
  );
};
