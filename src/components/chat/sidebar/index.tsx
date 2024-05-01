import { FC, JSX } from 'react';
import useGetConversations from '../../../hooks/get-conversations';
import ConversationComponent from '../conversations';
import { IConversation } from '../../../common/types/conversations';

const SidebarComponent: FC = (): JSX.Element => {
  const { conversations } = useGetConversations();

  const renderConversation: JSX.Element[] = conversations.map(
    (conversation: IConversation, index: number) => (
      <ConversationComponent
        key={conversation._id}
        conversation={conversation}
        lastElement={index === conversations.length - 1}
      />
    ),
  );

  return (
    <div className="flex flex-col w-2/5  border-r-2 overflow-y-auto">
      {renderConversation}
    </div>
  );
};

export default SidebarComponent;
