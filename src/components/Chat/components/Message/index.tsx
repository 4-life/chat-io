import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { getAvatarUrl } from 'utils/avatars';

import { UserData, UserMessage } from 'types';
import isToday from 'utils/isToday';

import {
  UserText,
  TextDate,
  icon,
  MsgRoot,
  MsgText,
  MsgAvatar,
  AvatarImage,
} from './styles';

type Props = {
  message: UserMessage;
  user: UserData | undefined;
  selectUser: (user?: UserData) => void;
};

function Message({ message, user, selectUser }: Props) {
  const { me, text, status, date } = message;

  // user left the room, but his messages still available if he'll get back
  if (!user) {
    return null;
  }

  const parsedDate = new Date(date);

  return (
    <MsgRoot sx={{ flexDirection: me ? 'row-reverse' : 'inherit' }}>
      <MsgAvatar>
        <Button onClick={() => selectUser(user)} sx={{ padding: 0 }}>
          <AvatarImage
            alt={`${user?.name || 'guest'} avatar`}
            src={user ? getAvatarUrl(user.avatar) : undefined}
            variant="rounded"
          />
        </Button>
      </MsgAvatar>
      <MsgText sx={{ justifyContent: me ? 'flex-end' : 'inherit' }}>
        <UserText>
          <Typography color="secondary" sx={{ wordBreak: 'break-word' }}>
            {text}
          </Typography>
          <Box>
            <TextDate>
              {status === 'sent' && me ? <DoneIcon sx={icon} /> : null}
              {status === 'received' && me ? (
                <DoneAllIcon sx={icon} color="primary" />
              ) : null}
              {isToday(parsedDate)
                ? parsedDate.toLocaleTimeString()
                : parsedDate.toLocaleString()}
            </TextDate>
          </Box>
        </UserText>
      </MsgText>
    </MsgRoot>
  );
}

export default memo(Message);
