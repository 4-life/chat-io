import React, { useEffect, useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { CallAddUser } from 'store/user/action';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import { avatars, getAvatarUrl } from 'utils/avatars';
import randomId from 'utils/randomId';
import { ImageButton, ImageSrc, StyledDialog, Avatars } from './styles';

function CreateUserDialog() {
  const { user } = useSelector((store: RootState) => store.user, shallowEqual);
  const [open, setOpen] = useState(!user);
  const [username, setUsername] = useState('');
  const [userstatus, setUserstatus] = useState('');
  const [useravatar, setUseravatar] = useState('');

  const dispatch = useDispatch();

  const handleJoin = () => {
    if (!username || !userstatus || !useravatar) {
      return;
    }

    setOpen(false);
    setUsername('');
    setUserstatus('');
    setUseravatar('');
    dispatch(
      CallAddUser({
        id: randomId(),
        name: username,
        status: userstatus,
        avatar: useravatar,
      })
    );
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserstatus(event.target.value);
  };
  const handleChangeAvatar = (id: string) => {
    setUseravatar(id);
  };

  useEffect(() => {
    if (!user) {
      setOpen(true);
    }
  }, [user]);

  return (
    <StyledDialog open={open}>
      <DialogTitle>Create your character</DialogTitle>
      <DialogContent>
        <FormControl
          component="form"
          autoComplete="off"
          noValidate
          fullWidth
          onSubmit={handleJoin}
        >
          <TextField
            autoFocus
            margin="dense"
            label="Your name"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={handleChangeName}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Your status"
            type="text"
            fullWidth
            variant="standard"
            value={userstatus}
            onChange={handleChangeStatus}
          />
          <Avatars>
            {avatars.map((avatar) => (
              <ImageButton
                focusRipple
                key={avatar}
                onClick={() => handleChangeAvatar(avatar)}
                className={avatar === useravatar ? 'active' : ''}
              >
                <ImageSrc
                  style={{ backgroundImage: `url(${getAvatarUrl(avatar)})` }}
                />
              </ImageButton>
            ))}
          </Avatars>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleJoin} variant="contained">
          Join
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default CreateUserDialog;
