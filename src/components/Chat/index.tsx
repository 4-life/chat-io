import React, { useState, createRef, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CallExitUser } from 'store/user/action';
import Box from '@mui/material/Box';
import { UserData, UserMessage } from 'types';
import { RootState } from 'store/reducer';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import useChat from 'hooks/useChat';
import {
  Main,
  ExitButton,
  ChatBlock,
  Header,
  Content,
  Users,
  Messages,
  Info,
  MessagesList,
} from './styles';
import ChatInput from './components/ChatInput';
import UserInGroup from './components/UserInGroup';
import Message from './components/Message';
import VisitorInfo from './components/VisitorInfo';

function Chat() {
  const ref = createRef<HTMLElement>();
  const dispatch = useDispatch();
  const { user } = useSelector((store: RootState) => store.user, shallowEqual);
  const [showUserInfo, setShowUserInfo] = useState<UserData | null>(null);
  const showUserHandler = (userData?: UserData): void => {
    if (!userData) {
      setShowUserInfo(null);
      return;
    }

    setShowUserInfo(userData);
  };

  const close = () => setShowUserInfo(null);

  const scrollBottom = useCallback(() => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 200);
  }, [ref]);

  const handleExit = () => {
    dispatch(CallExitUser());
    userExit(user?.id);
  };

  const { users, messages, sendMessage, userExit, error } = useChat(
    user,
    scrollBottom
  );

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      userExit(user?.id);
    });
  }, [user, userExit]);

  const getUserByMessage = useCallback(
    (message: UserMessage) => {
      return users.find((u) => u.id === message.userId);
    },
    [users]
  );

  return (
    <Main>
      <ChatBlock>
        <Box sx={{ flexDirection: 'column', flex: 5 }}>
          <Header>
            <ExitButton onClick={handleExit}>
              <ArrowBackIosNewIcon />
            </ExitButton>
            <Typography color="primary" variant="h4" sx={{ marginTop: '10px' }}>
              Zen Chat
            </Typography>
          </Header>

          <Content>
            <Users>
              {users?.map((u) => (
                <UserInGroup user={u} key={u.id} selectUser={showUserHandler} />
              ))}
            </Users>
            <Messages>
              <MessagesList ref={ref}>
                {messages?.map((message) => (
                  <Message
                    message={message}
                    key={message.id}
                    user={getUserByMessage(message)}
                  />
                ))}
              </MessagesList>
              <ChatInput
                scrollBottom={scrollBottom}
                sendMessage={sendMessage}
              />
            </Messages>
          </Content>
        </Box>
        <Info className={showUserInfo ? 'visible' : ''}>
          {showUserInfo && (
            <VisitorInfo user={showUserInfo} closeHandler={close} />
          )}
        </Info>
        <Snackbar
          open={error}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="warning" variant="filled">
            Restoring connection...
          </Alert>
        </Snackbar>
      </ChatBlock>
    </Main>
  );
}

export default Chat;
