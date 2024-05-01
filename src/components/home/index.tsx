import { FC, JSX } from 'react';
import HeaderComponent from '../header';
import ChatComponent from '../chat';
import Container from '../container';

const HomePage: FC = (): JSX.Element => {
  return (
    <Container>
      <HeaderComponent />
      <ChatComponent />
    </Container>
  );
};

export default HomePage;
