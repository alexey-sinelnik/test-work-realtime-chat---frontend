import { useSocketContext } from '../../context/socket';
import useConversation from '../../store/conversation';
import { useEffect } from 'react';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  // @ts-ignore
  useEffect(() => {
    socket.on('newMessage', message => {
      setMessages([...messages, message]);
    });

    return () => socket.off('newMessage');
  }, [messages, setMessages, socket]);
};

export default useListenMessages;
