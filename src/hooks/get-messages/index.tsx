import { useEffect, useState } from 'react';
import useConversation from '../../store/conversation';
import toast from 'react-hot-toast';
import { instance } from '../../utils/axios';

const useGetMessages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const { data } = await instance.get(
          `api/messages/${selectedConversation._id}`,
        );
        if (data.error) throw new Error(data.error);
        setMessages(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
