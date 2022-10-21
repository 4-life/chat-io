import React, { useEffect, useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { faker } from '@faker-js/faker';
import { RootState } from 'store/reducer';
import { CallAddUser } from 'store/user/action';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import LoginIcon from '@mui/icons-material/Login';
import InputAdornment from '@mui/material/InputAdornment';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Typography from '@mui/material/Typography';
import CasinoIcon from '@mui/icons-material/Casino';
import StyledDialog from './styles';
import SelectAvatar from './components/SelectAvatar';

function CreateUserDialog() {
  const { user } = useSelector((store: RootState) => store.user, shallowEqual);
  const [open, setOpen] = useState(!user);
  const [username, setUsername] = useState<string | undefined>('');
  const [jobtitle, setJobTitle] = useState<string | undefined>('');
  const [useravatar, setUseravatar] = useState<string | undefined>('');

  const dispatch = useDispatch();

  const handleJoin = () => {
    if (!username) {
      setUsername(undefined);
      return;
    }
    if (!jobtitle) {
      setJobTitle(undefined);
      return;
    }
    if (!useravatar) {
      setUseravatar(undefined);
      return;
    }

    setOpen(false);
    setUsername('');
    setJobTitle('');
    setUseravatar('');
    dispatch(
      CallAddUser({
        id: Number(faker.random.numeric(7)),
        name: username,
        jobtitle,
        avatar: useravatar,
      })
    );
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangeJobTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitle(event.target.value);
  };
  const handleChangeAvatar = (id: string) => {
    setUseravatar(id);
  };
  const handleRandomName = () => {
    const randomName = faker.name.fullName();
    setUsername(randomName);
  };
  const handleRandomJobTitle = () => {
    const randomJobTitle = faker.company.catchPhrase();
    setJobTitle(randomJobTitle);
  };

  useEffect(() => {
    if (!user) {
      setOpen(true);
    }
  }, [user]);

  return (
    <StyledDialog open={open} data-test-id="create-user-dialog">
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
            error={username === undefined}
            helperText={username === undefined ? 'Required field' : undefined}
            autoFocus
            margin="dense"
            label="Your name"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={handleChangeName}
            data-test-id="username"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleRandomName}>
                    <CasinoIcon color="secondary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            error={jobtitle === undefined}
            helperText={jobtitle === undefined ? 'Required field' : undefined}
            margin="dense"
            label="Your job title"
            type="text"
            fullWidth
            variant="standard"
            value={jobtitle}
            onChange={handleChangeJobTitle}
            data-test-id="jobtitle"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleRandomJobTitle}>
                    <CasinoIcon color="secondary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <SelectAvatar
            selected={useravatar}
            selectAvatar={handleChangeAvatar}
          />
          {useravatar === undefined ? (
            <Typography color="darkred" sx={{ textAlign: 'center' }}>
              <WarningAmberIcon sx={{ verticalAlign: '-4px' }} />
              &nbsp;
              <span>Select your avatar</span>
            </Typography>
          ) : undefined}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleJoin}
          variant="outlined"
          size="large"
          endIcon={<LoginIcon fontSize="small" sx={{ marginTop: '-4px' }} />}
          sx={{ width: '100%' }}
          data-test-id="submit"
        >
          Join
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default CreateUserDialog;
