import React, { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { GetAddMessage } from 'store/actions/messages';
import { users } from 'dummy';

import Box from './styles';

type Props = { scrollBottom: () => void };

function ChatInput({ scrollBottom }: Props) {
  const dispatch = useDispatch();
  const [txt, setTxt] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);
  const sendMsgHandle = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!valid) {
      return;
    }

    dispatch(
      GetAddMessage({
        id: 123,
        me: true,
        text: txt,
        status: 'sent',
        date: new Date().toJSON(),
        user: users[4],
      })
    );

    setValid(false);
    setTxt('');
    scrollBottom();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValid(!!value && !!value.length && value.length < 250);
    setTxt(value);
  };

  return (
    <Box>
      <FormControl
        component="form"
        autoComplete="off"
        noValidate
        fullWidth
        onSubmit={sendMsgHandle}
      >
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <IconButton color="secondary">
              <SentimentSatisfiedAltIcon fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={9}>
            <Input
              color="secondary"
              placeholder="Type something..."
              fullWidth
              disableUnderline
              margin="dense"
              required
              value={txt}
              onChange={handleChange}
              sx={{ marginTop: '4px' }}
            />
          </Grid>
          <Grid item xs={1}>
            {valid ? (
              <IconButton color="secondary" type="submit">
                <SendIcon fontSize="small" />
              </IconButton>
            ) : null}
          </Grid>
          <Grid item xs={1}>
            <IconButton color="secondary">
              <AttachFileIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
}

export default ChatInput;
