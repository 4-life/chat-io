import React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';

import { UserData } from 'types';
import { getAvatarUrl } from 'utils/avatars';
import getTimeAgo from 'utils/timeAgo';

import { Box, UserName, UserStatus, Header, AvatarImg } from './styles';

type Props = {
  user: UserData | null;
  closeHandler: () => void;
  currentUser: boolean;
};

function VisitorInfo({ user, closeHandler, currentUser }: Props) {
  const { name, status, avatar, online, connectedDate } = user || {};
  const parsedDate = connectedDate ? new Date(connectedDate) : new Date();

  return (
    <Drawer anchor="right" open={!!user} onClose={closeHandler}>
      <Box>
        <Header variant="h5" color="primary">
          {currentUser ? 'My' : 'Visitor'} Info
          <IconButton color="secondary" onClick={closeHandler}>
            <CancelOutlinedIcon fontSize="small" />
          </IconButton>
        </Header>

        <Grid container spacing={2} alignItems="center" marginBottom={4}>
          <Grid item xs={4}>
            <AvatarImg
              alt={`${name} avatar`}
              src={getAvatarUrl(avatar || '')}
              variant="rounded"
            />
          </Grid>
          <Grid item xs={8}>
            <UserName color="primary">{name}</UserName>
            <UserStatus color="secondary">{status}</UserStatus>
          </Grid>
        </Grid>

        <Typography color="secondary">
          Connected:&nbsp;
          <Typography component="span" color="primary">
            {getTimeAgo(parsedDate, false)}
          </Typography>
        </Typography>
        <Typography color="secondary">
          Status:&nbsp;
          <Typography component="span" color="primary">
            {online ? 'online' : 'offline'}
            <CircleIcon
              color={online ? 'success' : 'error'}
              sx={{ verticalAlign: 'middle', width: 10, marginLeft: '3px' }}
            />
          </Typography>
        </Typography>
      </Box>
    </Drawer>
  );
}

export default VisitorInfo;
