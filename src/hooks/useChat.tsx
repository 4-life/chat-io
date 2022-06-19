import { useCallback, useRef, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useShallowCompareEffect } from 'react-use';
import { SocketInstance, UserData, UserMessage, SocketActions } from 'types';
import randomId from 'utils/randomId';

const useChat = (currentUser: UserData | null, scrollBottom: () => void) => {
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);
  const [messages, setMessages] = useState<UserMessage[]>([]);

  const socketRef = useRef<SocketInstance>();

  useShallowCompareEffect(() => {
    if (currentUser) {
      socketRef.current = io(process.env.SERVER_URL || '');
      socketRef.current.emit(SocketActions.USER_ADD, currentUser);
      socketRef.current.on(SocketActions.USERS, (usersList) => {
        setUsers(usersList);
      });

      socketRef.current.on('connect_error', () => {
        setError(true);
      });

      socketRef.current.on('connect', () => {
        setError(false);
        socketRef.current?.emit(SocketActions.USER_ADD, currentUser);
      });

      socketRef.current.emit(SocketActions.MESSAGE_GET);

      socketRef.current.on(SocketActions.MESSAGES, (messagesList) => {
        const updatedMessages = messagesList.map((msg) =>
          msg.userId === currentUser?.id ? { ...msg, me: true } : msg
        );
        setMessages(updatedMessages);
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
        id: randomId(),
        userId: currentUser.id,
        text: messageText,
        date: new Date().toJSON(),
        status: 'sent',
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

  useEffect(() => {
    const handleBeforeunload = () => {
      userExit(currentUser?.id);
    };

    window.addEventListener('beforeunload', handleBeforeunload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeunload);
    };
  }, [currentUser]);

  return { users, messages, sendMessage, removeMessage, userExit, error };
};

export default useChat;
