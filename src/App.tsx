import { Container, Stack } from '@mui/system';

import styles from './App.module.css';
import { ChatList } from './pages/chatList/ChatList';
import { Messages } from './pages/messages/Messages';

export const App = () => {
  return (
    <Container maxWidth='xl'>
      <Stack direction='row' className={styles.inner}>
        <ChatList />
        <Messages />
      </Stack>
    </Container>
  );
};
