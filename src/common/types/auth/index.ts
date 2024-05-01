export interface ISignupState {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

export interface ISignInState {
  email: string;
  password: string;
}

export interface IUser {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  gender: string;
  _id: string;
  avatar: string;
}

export interface IGenderProps {
  selectedGender: string;
  onCheckboxChange: (gender: string) => void;
}
