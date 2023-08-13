import { Container, Stack } from '@mui/system';
import { ChatList } from './components/chatList/ChatList';
import { Messages } from './components/messages/Messages';

export const App = () => {
  return (
    <Container maxWidth={'xl'}>
      <Stack direction='row' height={800}>
        <ChatList />
        <Messages />
      </Stack>
    </Container>
  );
};
