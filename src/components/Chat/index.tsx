import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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

function Chat() {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const showUserHandler = () => {
    setShowUserInfo(!showUserInfo);
  };

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
              <Button onClick={showUserHandler} color="info">
                UserName
              </Button>
            </Users>
            <Messages>
              <MessagesList>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque eu dolor ullamcorper, vehicula lectus sed, sagittis
                libero. Curabitur consectetur vel elit ut hendrerit. Suspendisse
                eleifend lobortis suscipit. Fusce commodo, quam quis convallis
              </MessagesList>
              <ChatInput />
            </Messages>
          </Content>
        </Box>
        <Info className={showUserInfo ? 'visible' : ''}>
          <Typography>Main user info data</Typography>
        </Info>
      </ChatBlock>
    </Main>
  );
}

export default Chat;
