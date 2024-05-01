export interface IMessageType {
  createdAt: string;
  message: string;
  receiverId: string;
  senderId: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface IMessageProps {
  message: IMessageType;
}
