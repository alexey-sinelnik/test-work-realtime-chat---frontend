import { FC, JSX } from 'react';
import { useLocation } from 'react-router-dom';
import LoginComponent from './login';
import RegisterComponent from './register';

const AuthComponent: FC = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40" />
        </div>

        {pathname === '/login' ? <LoginComponent /> : <RegisterComponent />}
      </div>
    </div>
  );
};

export default AuthComponent;
