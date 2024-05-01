import { FC, JSX } from 'react';
import useLogout from '../../hooks/logout';
import { useAuthContext } from '../../context/auth';

const HeaderComponent: FC = (): JSX.Element => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div className="font-semibold text-2xl">Test work chat</div>
      <div className="flex items-center gap-8">
        <img className="h-12 w-12" src={user.avatar} alt="User avatar" />
        <button className="btn btn-success" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
