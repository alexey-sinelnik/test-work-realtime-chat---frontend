import { io, Socket } from 'socket.io-client';

const URL: string =
  import.meta.env.NODE_ENV === 'production'
    ? undefined
    : 'http://localhost:5000';

export const socket: Socket = io(URL);
