import { Context, createContext, FC, useContext, useState, JSX } from 'react';
import {
  IAuthContext,
  IAuthContextProviderProps,
} from '../../common/types/context';

export const AuthContext: Context<IAuthContext> = createContext(
  {} as IAuthContext,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider: FC<IAuthContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('chat-user')) || null,
  );
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
