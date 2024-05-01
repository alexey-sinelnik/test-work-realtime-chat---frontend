import { FC, FormEvent, JSX } from 'react';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import useSignIn from '../../../hooks/login';

const LoginComponent: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useSignIn();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <h2 className="mt-3 text-2xl text-gray-500 dark:text-gray-300">
            Sign in
          </h2>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="example@example.com"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                type="password"
                name="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                placeholder="Your Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?{' '}
            <Link
              to="/register"
              className="text-blue-500 focus:outline-none focus:underline hover:underline"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
