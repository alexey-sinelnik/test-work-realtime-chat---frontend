import { FC, JSX } from 'react';
import SidebarComponent from './sidebar';
import MessagesComponent from './messages';

const ChatComponent: FC = (): JSX.Element => {
  return (
    <div className="flex flex-row justify-between bg-white min-h-[500px] border-b-2">
      <SidebarComponent />
      <MessagesComponent />
    </div>
  );
};

export default ChatComponent;
