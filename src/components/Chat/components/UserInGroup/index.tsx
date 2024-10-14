import React, { memo } from 'react';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';

import { UserData } from 'types';
import getTimeAgo from 'utils/timeAgo';
import { getAvatarUrl } from 'utils/avatars';

import { Box, TimeAgo, UserName, UserStatus, Btn } from './styles';

type Props = {
  user: UserData;
  selectUser: (user?: UserData) => void;
  currentUser: boolean;
};

function UserInGroup({ user, selectUser, currentUser }: Props) {
  const { name, status, online, connectedDate, avatar } = user;
  const parsedDate = connectedDate ? new Date(connectedDate) : new Date();

  return (
    <Box>
      <Btn onClick={() => selectUser(user)}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} sm={2}>
            <Badge color="success" variant="dot" invisible={!online}>
              <Avatar
                alt={`${name} avatar`}
                src={getAvatarUrl(avatar)}
                variant="rounded"
                sx={{ width: '100%', height: '100%', borderRadius: '20px' }}
              />
            </Badge>
          </Grid>
          <Grid item xs={0} sm={8}>
            <UserName>
              {name}
              {currentUser ? (
                <Typography component="span" color="gray" marginLeft={1}>
                  (you)
                </Typography>
              ) : null}
            </UserName>
            <UserStatus color="secondary">{status}</UserStatus>
          </Grid>
          <Grid item xs={0} sm={2}>
            <TimeAgo color="secondary">
              {user.online ? getTimeAgo(parsedDate) : 'offline'}
            </TimeAgo>
          </Grid>
        </Grid>
      </Btn>
    </Box>
  );
}

export default memo(UserInGroup);
