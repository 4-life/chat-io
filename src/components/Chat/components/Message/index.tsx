import React, { memo } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import { getAvatarUrl } from 'utils/avatars';

import { UserData, UserMessage } from 'types';
import isToday from 'utils/isToday';

import { UserText, TextDate, icon } from './styles';

type Props = {
  message: UserMessage;
  user: UserData | undefined;
  selectUser: (user?: UserData) => void;
};

function Message({ message, user, selectUser }: Props) {
  const { me, text, status, date } = message;
  const parsedDate = new Date(date);

  return (
    <Grid
      container
      spacing={2}
      sx={{ flexDirection: me ? 'row-reverse' : 'inherit', margin: '.5em 0' }}
    >
      <Grid item xs={3} sm={3} md={2}>
        <Button onClick={() => selectUser(user)} sx={{ padding: 0 }}>
          <Avatar
            alt={`${user?.name || 'guest'} avatar`}
            src={user ? getAvatarUrl(user.avatar) : undefined}
            variant="rounded"
            sx={{ width: 64, height: 64, borderRadius: '20px' }}
          />
        </Button>
      </Grid>
      <Grid item xs={5} sm={5} md={6}>
        <UserText>
          <Typography color="secondary">{text}</Typography>
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
      </Grid>
    </Grid>
  );
}

export default memo(Message);
