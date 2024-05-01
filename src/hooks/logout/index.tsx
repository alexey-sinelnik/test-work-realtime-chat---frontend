import { useState } from 'react';
import { instance } from '../../utils/axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../context/auth';

const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      await instance.post('/api/auth/logout');
      localStorage.removeItem('chat-user');
      setUser(null);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
