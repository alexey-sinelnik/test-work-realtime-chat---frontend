import { ISignInState, ISignupState } from '../../common/types/auth';
import toast from 'react-hot-toast';

export const handleSignupError = (data: ISignupState): boolean => {
  if (!data) {
    toast('Please fill in all fields');
    return false;
  }

  if (data.password !== data.confirmPassword) {
    toast("Password don't  match");
    return false;
  }

  if (data.password.length < 6) {
    toast('Password must be at least 6 characters');
    return false;
  }

  return true;
};

export const handleSigninError = (data: ISignInState): boolean => {
  if (!data) {
    toast('Please fill in all fields');
    return false;
  }

  if (data.password.length < 6) {
    toast('Password must be at least 6 characters');
    return false;
  }

  return true;
};
