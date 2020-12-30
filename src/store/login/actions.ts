import { User, ValidateUser } from './types'

export const validateUser = (user: User[]) => {
  return {
    type: 'VALIDATED_USER',
    user
  };
};
