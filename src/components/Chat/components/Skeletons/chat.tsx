import React from 'react';
import Skeleton from '@mui/material/Skeleton';

type Props = {
  show: boolean;
};

function ChatSkeleton({ show }: Props) {
  if (!show) {
    return null;
  }

  return (
    <>
      <Skeleton
        variant="rectangular"
        width="70%"
        height={40}
        sx={{ margin: '1em 0 0 1em', borderRadius: '20px' }}
      />
      <Skeleton
        variant="rectangular"
        width="70%"
        height={80}
        sx={{ margin: '1em 1em 1em auto', borderRadius: '20px' }}
      />
      <Skeleton
        variant="rectangular"
        width="70%"
        height={60}
        sx={{ margin: '0 1em 0', borderRadius: '20px' }}
      />
    </>
  );
}

export default ChatSkeleton;
