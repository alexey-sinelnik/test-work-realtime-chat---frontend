import { create } from 'zustand';
import {
  ConversationStoreType,
  IConversation,
} from '../../common/types/conversations';
import { IMessageType } from '../../common/types/messages';

const useConversation = create<ConversationStoreType>(set => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: IConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: IMessageType[]) => set({ messages }),
}));

export default useConversation;
