import { FC, JSX } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import AuthComponent from './components/auth';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/auth';

const App: FC = (): JSX.Element => {
  const { user } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <AuthComponent />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <AuthComponent />}
        />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
