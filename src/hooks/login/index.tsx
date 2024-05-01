import { useState } from 'react';
import { useAuthContext } from '../../context/auth';
import { instance } from '../../utils/axios';
import toast from 'react-hot-toast';
import { ISignInState } from '../../common/types/auth';
import { handleSigninError } from '../../utils/auth';

const useSignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useAuthContext();

  const login = async (data: ISignInState): Promise<void> => {
    const success: boolean = handleSigninError(data);
    if (!success) return;

    setLoading(true);
    try {
      const { data: response } = await instance.post('api/auth/login', data);
      if (response.error) throw new Error(response.error);
      localStorage.setItem('chat-user', JSON.stringify(response));
      setUser(response);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useSignIn;
