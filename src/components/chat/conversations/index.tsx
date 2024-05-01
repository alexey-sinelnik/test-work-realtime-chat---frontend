import { FC, JSX } from 'react';
import useConversation from '../../../store/conversation';
import { useSocketContext } from '../../../context/socket';
import { IConversationProps } from '../../../common/types/conversations';

const ConversationComponent: FC<IConversationProps> = ({
  conversation,
  lastElement,
}): JSX.Element => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected: boolean = selectedConversation?._id === conversation._id;
  const isOnline: boolean = onlineUsers.includes(conversation._id);
  const userStatus: string = isOnline ? 'bg-green-600' : 'bg-gray-500';

  return (
    <>
      <div
        className={`flex flex-row py-4 px-2 justify-center items-center cursor-pointer hover:bg-sky-100 ${isSelected ? 'bg-sky-100' : ''}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="w-1/4 relative">
          <img
            src={conversation.avatar}
            className="object-cover h-12 w-12 rounded-full"
            alt="User avatar"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center text-lg font-semibold">
            <div className={`w-2 h-2 rounded-full mr-2 ${userStatus}`} />
            {conversation.userName}
          </div>
          <span className="text-gray-500">Pick me at 9:00 Am</span>
        </div>
      </div>
      {!lastElement && <div className="my-0 h-0.5 border-t-0 bg-neutral-100" />}
    </>
  );
};

export default ConversationComponent;
