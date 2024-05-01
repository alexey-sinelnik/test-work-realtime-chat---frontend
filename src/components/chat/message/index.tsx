import { FC, JSX } from 'react';
import { IMessageProps } from '../../../common/types/messages';
import { useAuthContext } from '../../../context/auth';
import useConversation from '../../../store/conversation';

const MessageComponent: FC<IMessageProps> = ({ message }): JSX.Element => {
  const { user } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe: boolean = message.senderId === user._id;
  const chatClassName: string = fromMe ? 'justify-end' : 'justify-start';
  const participantImage: string = fromMe
    ? user.avatar
    : selectedConversation.avatar;
  const backgroundMessage: string = fromMe ? 'bg-blue-400' : 'bg-gray-600';

  return (
    <>
      <div className={`flex mb-4 ${chatClassName}`}>
        <div
          className={`mr-2 py-3 px-4 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white ${backgroundMessage}`}
        >
          <p>{message.message}</p>
        </div>
        <img
          src={participantImage}
          className="object-cover h-8 w-8 rounded-full"
          alt="User avatar"
        />
      </div>
    </>
  );
};

export default MessageComponent;
