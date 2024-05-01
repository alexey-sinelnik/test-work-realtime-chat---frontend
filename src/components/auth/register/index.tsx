import { FC, FormEvent, JSX } from 'react';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import GenderComponent from '../gender';
import { ISignupState } from '../../../common/types/auth';
import useSignup from '../../../hooks/signup';

const RegisterComponent: FC = (): JSX.Element => {
  const [inputs, setInputs] = useState<ISignupState>({
    fullName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  const { signup } = useSignup();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    await signup(inputs);
  };

  const handleCheckboxChange = (gender: string): void => {
    setInputs({ ...inputs, gender });
  };

  return (
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <div className="text-center">
          <h2 className="mt-3 text-2xl text-gray-500 dark:text-gray-300">
            Sign up
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
                placeholder="example@example.com"
                value={inputs.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
              </div>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={inputs.fullName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-200">
                  Username
                </label>
              </div>

              <input
                type="text"
                name="username"
                placeholder="Your username"
                value={inputs.userName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputs({ ...inputs, userName: e.target.value })
                }
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-200">
                  Gender
                </label>
              </div>

              <GenderComponent
                selectedGender={inputs.gender}
                onCheckboxChange={handleCheckboxChange}
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
                id="password"
                placeholder="Your Password"
                value={inputs.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-600 dark:text-gray-200">
                  Confirm password
                </label>
              </div>

              <input
                type="password"
                name="confirmPassword"
                id="password"
                placeholder="Confirm your password"
                value={inputs.confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Already have account?{' '}
            <Link
              to="/login"
              className="text-blue-500 focus:outline-none focus:underline hover:underline"
            >
              Sign in
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
