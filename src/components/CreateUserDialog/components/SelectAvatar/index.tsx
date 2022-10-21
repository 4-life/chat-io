import React, { memo } from 'react';
import useChat from 'hooks/useChat';
import { avatars, getAvatarUrl } from 'utils/avatars';
import { ImageButton, ImageSrc, Avatars, FakeButton } from './styles';

interface Props {
  selected: string | undefined;
  selectAvatar: (avatar: string) => void;
}

function SelectAvatar({ selected, selectAvatar }: Props) {
  const { users } = useChat(null);

  const handleChangeAvatar = (id: string) => {
    selectAvatar(id);
  };

  const isDisabled = (avatar: string): boolean => {
    const exists = users.find((u) => u.avatar === avatar);
    return !!exists;
  };

  return (
    <Avatars>
      {avatars.map((avatar) => (
        <ImageButton
          disabled={isDisabled(avatar)}
          focusRipple
          key={avatar}
          onClick={() => handleChangeAvatar(avatar)}
          className={avatar === selected ? 'active' : ''}
          data-test-id="avatar"
        >
          <ImageSrc
            style={{ backgroundImage: `url(${getAvatarUrl(avatar)})` }}
          />
        </ImageButton>
      ))}
      {avatars.map((avatar) => (
        <FakeButton key={`fixFlex${avatar}`} />
      ))}
    </Avatars>
  );
}

export default memo(SelectAvatar);
