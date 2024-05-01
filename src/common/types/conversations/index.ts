import { IMessageType } from '../messages';

export interface IConversation {
  avatar: string;
  email: string;
  fullName: string;
  gender: string;
  userName: string;
  __v: number;
  _id: string;
}

export interface IConversationProps {
  lastElement: boolean;
  conversation: IConversation;
}

export interface ConversationStoreType {
  selectedConversation: IConversation;
  setSelectedConversation: (value: IConversation) => void;
  messages: IMessageType[];
  setMessages: (value: IMessageType[]) => void;
}
