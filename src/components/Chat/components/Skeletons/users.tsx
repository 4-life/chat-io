import React from 'react';
import Skeleton from '@mui/material/Skeleton';

type Props = {
  show: boolean;
};

function UsersSkeleton({ show }: Props) {
  if (!show) {
    return null;
  }

  return (
    <>
      <Skeleton
        variant="rectangular"
        width="90%"
        height={50}
        sx={{ margin: '1em 0 0 1em', borderRadius: '20px' }}
      />
      <Skeleton
        variant="rectangular"
        width="90%"
        height={50}
        sx={{ margin: '1em 0 0 1em', borderRadius: '20px' }}
      />
    </>
  );
}

export default UsersSkeleton;
