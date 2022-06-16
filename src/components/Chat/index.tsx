import React, { useState, createRef, useEffect, useCallback } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { UserData } from 'types';
import { RootState } from 'store/reducers';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { users } from 'dummy';
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
  const { messages } = useSelector(
    (store: RootState) => store.messages,
    shallowEqual
  );
  const [showUserInfo, setShowUserInfo] = useState<UserData | null>(null);
  const showUserHandler = (user?: UserData): void => {
    if (!user) {
      setShowUserInfo(null);
      return;
    }

    setShowUserInfo(user);
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

  useEffect(() => {
    if (messages.length && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <ChatBlock>
        <Box sx={{ flexDirection: 'column', flex: 5 }}>
          <Header>
            <ExitButton>
              <ArrowBackIosNewIcon />
            </ExitButton>
            <Typography color="primary" variant="h4">
              Group Chat
            </Typography>
          </Header>

          <Content>
            <Users>
              {users?.map((user) => (
                <UserInGroup
                  user={user}
                  key={user.id}
                  selectUser={showUserHandler}
                />
              ))}
            </Users>
            <Messages>
              <MessagesList ref={ref}>
                {messages?.map((message) => (
                  <Message message={message} key={message.id} />
                ))}
              </MessagesList>
              <ChatInput scrollBottom={scrollBottom} />
            </Messages>
          </Content>
        </Box>
        <Info className={showUserInfo ? 'visible' : ''}>
          {showUserInfo && (
            <VisitorInfo user={showUserInfo} closeHandler={close} />
          )}
        </Info>
      </ChatBlock>
    </Main>
  );
}

export default Chat;
