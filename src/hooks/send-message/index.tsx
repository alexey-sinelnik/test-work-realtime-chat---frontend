import { useState } from 'react';
import useConversation from '../../store/conversation';
import toast from 'react-hot-toast';
import { instance } from '../../utils/axios';

const useSendMessage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string): Promise<void> => {
    const { data } = await instance.post(
      `api/messages/send/${selectedConversation._id}`,
      { message },
    );
    if (data.error) throw new Error(data.error);
    setMessages([...messages, data]);
    setLoading(true);
    try {
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
