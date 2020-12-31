import { User } from './types'

export const validateUser = (user: User[]) => {
  return {
    type: 'VALIDATED_USER',
    user
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    user:[]       
  };
};
