import React, { memo } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';

import { UserMessage } from 'types';
import isToday from 'utils/isToday';

import { UserText, TextDate, icon } from './styles';

type Props = { message: UserMessage };

function Message({ message }: Props) {
  const { me, user, text, status, date } = message;
  const parsedDate = new Date(date);

  return (
    <Grid
      container
      spacing={2}
      sx={{ flexDirection: me ? 'row-reverse' : 'inherit', margin: '.5em 0' }}
    >
      <Grid item xs={2}>
        <Avatar
          alt={`${user.name} avatar`}
          src={user.avatar}
          variant="rounded"
          sx={{ width: 64, height: 64, borderRadius: '20px' }}
        />
      </Grid>
      <Grid item xs={6}>
        <UserText>
          <Typography color="secondary">{text}</Typography>
          <Box>
            <TextDate>
              {status === 'sent' ? <DoneIcon sx={icon} /> : null}
              {status === 'received' ? <DoneAllIcon sx={icon} /> : null}
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