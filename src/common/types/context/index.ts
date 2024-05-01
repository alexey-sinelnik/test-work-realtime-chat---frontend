import { ReactNode } from 'react';
import { IUser } from '../auth';
import { Socket } from 'socket.io-client';

export interface IAuthContext {
  user: IUser;
  setUser: (value: IUser) => void;
}
export interface IAuthContextProviderProps {
  children: ReactNode;
}

export interface ISocketContext {
  socket: Socket;
  onlineUsers: any[];
}
export interface ISocketContextProvider {
  children: ReactNode;
}
