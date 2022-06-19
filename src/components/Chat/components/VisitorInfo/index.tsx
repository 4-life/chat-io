import React from 'react';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { UserData } from 'types';
import { getAvatarUrl } from 'utils/avatars';

import { Box, UserName, UserStatus, Header, AvatarImg } from './styles';

type Props = { user: UserData; closeHandler: () => void };

function VisitorInfo({ user, closeHandler }: Props) {
  const { name, status, avatar } = user;

  return (
    <Box>
      <Header variant="h5" color="primary">
        Visitor Info
        <IconButton color="secondary" onClick={closeHandler}>
          <CancelOutlinedIcon fontSize="small" />
        </IconButton>
      </Header>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <AvatarImg
            alt={`${name} avatar`}
            src={getAvatarUrl(avatar)}
            variant="rounded"
          />
        </Grid>
        <Grid item xs={8}>
          <UserName color="primary">{name}</UserName>
          <UserStatus color="secondary">{status}</UserStatus>
        </Grid>
      </Grid>
    </Box>
  );
}

export default VisitorInfo;
