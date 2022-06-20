import React, { useState, createRef, useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CallExitUser } from 'store/user/action';
import Box from '@mui/material/Box';
import { UserData, UserMessage } from 'types';
import { RootState } from 'store/reducer';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Skeleton from '@mui/material/Skeleton';

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
  Logo,
  Title,
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Logo />
              <Title color="primary" variant="h4">
                Zen Chat
              </Title>
            </Box>
            {user?.id ? (
              <ExitButton onClick={handleExit}>
                <LogoutIcon />
              </ExitButton>
            ) : null}
          </Header>

          <Content>
            <Users>
              {users?.map((u) => (
                <UserInGroup user={u} key={u.id} selectUser={showUserHandler} />
              ))}
              {!users?.length ? (
                <Skeleton variant="rectangular" width="100%" height={50} />
              ) : null}
            </Users>
            <Messages>
              <MessagesList ref={ref}>
                {messages?.map((message) => (
                  <Message
                    message={message}
                    key={message.id}
                    user={getUserByMessage(message)}
                    selectUser={showUserHandler}
                  />
                ))}
                {!users?.length ? (
                  <>
                    <Skeleton
                      variant="rectangular"
                      width="70%"
                      height={40}
                      sx={{ margin: '1em 0 0 1em' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width="70%"
                      height={70}
                      sx={{ margin: '1em 1em 1em auto' }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width="70%"
                      height={60}
                      sx={{ margin: '0 1em 0' }}
                    />
                  </>
                ) : null}
              </MessagesList>
              <ChatInput
                scrollBottom={scrollBottom}
                sendMessage={sendMessage}
              />
            </Messages>
          </Content>
        </Box>
        <Info>
          <VisitorInfo
            user={showUserInfo}
            closeHandler={close}
            currentUser={user?.id === showUserInfo?.id}
          />
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
