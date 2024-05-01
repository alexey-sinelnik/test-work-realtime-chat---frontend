import { createContext, FC, JSX, useContext, useEffect, useState } from 'react';
import {
  ISocketContext,
  ISocketContextProvider,
} from '../../common/types/context';
import { useAuthContext } from '../auth';
import io, { Socket } from 'socket.io-client';

export const SocketContext = createContext({} as ISocketContext);

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
  return useContext(SocketContext);
};

const SocketContextProvider: FC<ISocketContextProvider> = ({
  children,
}): JSX.Element => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useAuthContext();

  // @ts-ignore
  useEffect(() => {
    if (user) {
      const socket = io('http://localhost:5000', {
        query: {
          userId: user._id,
        },
      });
      setSocket(socket);

      socket.on('getOnlineUsers', users => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
