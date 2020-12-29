import { LoginInfo, VALIDATE_USER } from './types'

export const validateUser= (user: LoginInfo) => {
  return {
    type: VALIDATE_USER,
    user
  };
};
