import { useCallback, useRef, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useShallowCompareEffect } from 'react-use';
import { SocketInstance, UserData, UserMessage, SocketActions } from 'types';
import { faker } from '@faker-js/faker';
import env from 'environment';

const { SERVER_URL } = env();

const useChat = (currentUser: UserData | null, scrollBottom?: () => void) => {
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);
  const [messages, setMessages] = useState<UserMessage[]>([]);

  const socketRef = useRef<SocketInstance>();

  useShallowCompareEffect(() => {
    socketRef.current = io(SERVER_URL, {
      secure: true,
    });

    socketRef.current.on(SocketActions.USERS, (usersList) => {
      setUsers(usersList);
    });

    socketRef.current.emit(SocketActions.USERS_GET);

    if (currentUser) {
      socketRef.current.emit(SocketActions.USER_ADD, currentUser);

      socketRef.current.on('connect_error', () => {
        setError(true);
      });

      socketRef.current.on('connect', () => {
        setError(false);
        socketRef.current?.emit(SocketActions.USER_ADD, currentUser);
        socketRef.current?.emit(SocketActions.MESSAGE_GET);
      });

      socketRef.current.emit(SocketActions.MESSAGE_GET);

      socketRef.current.on(SocketActions.MESSAGES, (messagesList) => {
        const updatedMessages = messagesList.map((msg) =>
          msg.userId === currentUser?.id
            ? { ...msg, me: true }
            : { ...msg, me: false }
        );
        setMessages(updatedMessages);
        scrollBottom?.();
        // const otherMsgs = updatedMessages.filter(({ me }) => !me);
        // const lastMsg = otherMsgs[otherMsgs.length - 1];

        // if (lastMsg) {
        //   const sender = users.find(({ id }) => id === lastMsg.userId);

        //   if (sender) {
        //     showNotification(`New message from ${sender.name}`, {
        //       body: lastMsg.text,
        //       icon: '/images/logo.webp',
        //     });
        //   }
        // }
      });
    } else {
      setMessages([]);
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [currentUser || {}, scrollBottom]);

  const sendMessage = useCallback(
    (messageText: string) => {
      if (!currentUser) {
        return;
      }

      const newMessage: UserMessage = {
        id: Number(faker.random.numeric(7)),
        userId: currentUser.id,
        text: messageText,
        date: new Date().toJSON(),
        status: 'sent',
        me: true,
      };

      socketRef.current?.emit(SocketActions.MESSAGE_ADD, newMessage);

      setMessages([...messages, newMessage]);

      scrollBottom?.();
    },
    [currentUser, scrollBottom, setMessages, messages]
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
