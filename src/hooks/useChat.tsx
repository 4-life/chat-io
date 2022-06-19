import { useCallback, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useBeforeUnload, useShallowCompareEffect } from 'react-use';
import { SocketInstance, UserData, UserMessage, SocketActions } from 'types';

const useChat = (currentUser: UserData | null, scrollBottom: () => void) => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [messages, setMessages] = useState<UserMessage[]>([]);

  const socketRef = useRef<SocketInstance>();

  useShallowCompareEffect(() => {
    if (currentUser) {
      socketRef.current = io(process.env.SERVER_URL || '');
      socketRef.current.emit(SocketActions.USER_ADD, currentUser);
      socketRef.current.on('users', (usersList) => {
        setUsers(usersList);
      });

      socketRef.current.emit(SocketActions.MESSAGE_GET);

      socketRef.current.on('messages', (messagesList) => {
        const newMessages = messagesList.map((msg) =>
          msg.user.id === currentUser?.id ? { ...msg, me: true } : msg
        );
        setMessages(newMessages);
        scrollBottom();
      });
    } else {
      setMessages([]);
      setUsers([]);
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [currentUser, scrollBottom]);

  const sendMessage = useCallback(
    (messageText: string) => {
      if (!currentUser) {
        return;
      }

      socketRef.current?.emit(SocketActions.MESSAGE_ADD, {
        id: new Date().getTime(),
        user: currentUser,
        text: messageText,
        date: new Date().toJSON(),
      });

      scrollBottom();
    },
    [currentUser, scrollBottom]
  );

  const removeMessage = (id: number) => {
    socketRef.current?.emit(SocketActions.MESSAGE_REMOVE, id);
  };

  const userExit = (id?: number) => {
    if (id) {
      socketRef.current?.emit(SocketActions.USER_LEAVE, id);
    }
  };

  useBeforeUnload(() => {
    if (currentUser) {
      socketRef.current?.emit(SocketActions.USER_LEAVE, currentUser.id);
    }
    return false;
  });

  return { users, messages, sendMessage, removeMessage, userExit };
};

export default useChat;
