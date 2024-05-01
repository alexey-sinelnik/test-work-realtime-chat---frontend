import {
  ChangeEvent,
  FC,
  FormEvent,
  JSX,
  useEffect,
  useRef,
  useState,
} from 'react';
import MessageComponent from '../message';
import useConversation from '../../../store/conversation';
import useSendMessage from '../../../hooks/send-message';
import useGetMessages from '../../../hooks/get-messages';
import useListenMessages from '../../../hooks/listen-messages';
import { useAuthContext } from '../../../context/auth';
import MessageSkeleton from '../../skeletons/message';

import { HiPaperAirplane } from 'react-icons/hi';
import { IMessageType } from '../../../common/types/messages';

const MessagesComponent: FC = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const { user } = useAuthContext();
  useListenMessages();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { sendMessage } = useSendMessage();
  const { messages, loading } = useGetMessages();
  const messageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  const renderMessage: JSX.Element[] = messages.map((message: IMessageType) => (
    <div key={message._id} ref={messageRef}>
      <MessageComponent message={message} />
    </div>
  ));

  return (
    <>
      {selectedConversation ? (
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
            {loading && [
              ...Array(3).map((_, index) => <MessageSkeleton key={index} />),
            ]}
            {!loading && messages.length === 0 && (
              <div className="flex justify-center items-center">
                <p>Send a message to start the conversation</p>
              </div>
            )}
            {!loading && (
              <div className="h-[500px] overflow-y-scroll">{renderMessage}</div>
            )}
          </div>
          <form className="py-5 relative" onSubmit={handleSubmit}>
            <input
              className="w-full bg-gray-300 py-5 px-3 rounded-xl"
              type="text"
              placeholder="type your message here..."
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
              value={message}
            />
            <button
              type="submit"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <HiPaperAirplane className="rotate-45 text-xl opacity-50" />
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full px-5 flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-medium">{`Welcome ${user.userName}`}</h2>
          <p className="text-xl">Select conversations</p>
        </div>
      )}
    </>
  );
};

export default MessagesComponent;
