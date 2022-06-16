import React, { memo } from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';

import { UserData } from 'types';
import getTimeAgo from 'utils/timeAgo';

import { Box, TimeAgo, UserName, UserStatus, Btn } from './styles';

type Props = { user: UserData; selectUser: (user?: UserData) => void };

function UserInGroup({ user, selectUser }: Props) {
  const { name, status, online, connectedDate, avatar } = user;
  const parsedDate = new Date(connectedDate);

  return (
    <Box>
      <Btn onClick={() => selectUser(user)}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={2}>
            <Badge
              color="success"
              variant="dot"
              invisible={!online}
              sx={{ marginRight: '1em' }}
            >
              <Avatar
                alt={`${name} avatar`}
                src={avatar}
                variant="rounded"
                sx={{ width: '100%', height: '100%', borderRadius: '20px' }}
              />
            </Badge>
          </Grid>
          <Grid item xs={8}>
            <UserName>{name}</UserName>
            <UserStatus color="secondary">{status}</UserStatus>
          </Grid>
          <Grid item xs={2}>
            <TimeAgo color="secondary">{getTimeAgo(parsedDate)}</TimeAgo>
          </Grid>
        </Grid>
      </Btn>
    </Box>
  );
}

export default memo(UserInGroup);
