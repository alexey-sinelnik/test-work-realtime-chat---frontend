import { useState } from 'react';
import { ISignupState } from '../../common/types/auth';
import { handleSignupError } from '../../utils/auth';
import toast from 'react-hot-toast';
import { instance } from '../../utils/axios';
import { useAuthContext } from '../../context/auth';

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useAuthContext();

  const signup = async (data: ISignupState): Promise<void> => {
    const success: boolean = handleSignupError(data);
    if (!success) return;

    setLoading(true);
    try {
      const { data: response } = await instance.post(
        '/api/auth/register',
        data,
      );
      if (response.error) throw new Error(response.error);
      localStorage.setItem('chat-user', JSON.stringify(response));
      setUser(response);
    } catch (error) {
      toast.error(error.response.data.error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;
