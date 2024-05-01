import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { instance } from '../../utils/axios';
import { IConversation } from '../../common/types/conversations';

const useGetConversations = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [conversations, setConversations] = useState<IConversation[]>([]);

  const getConversations = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get('api/users');
      if (data.error) throw new Error(data.error);
      return data;
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConversations().then(response => {
      setConversations(response);
      setLoading(false);
    });
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
