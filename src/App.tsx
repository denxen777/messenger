import { Container, Stack } from '@mui/system';
import { ChatList } from './components/chatList/ChatList';
import { Messages } from './components/messages/Messages';
import styles from './App.module.css';

export const App = () => {
  return (
    <Container maxWidth='xl'>
      <Stack direction='row' className={styles.app}>
        <ChatList />
        <Messages />
      </Stack>
    </Container>
  );
};
