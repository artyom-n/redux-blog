
import { ValidateUser, UserState, LogoutUser } from './types';

const theState = {
  user: []
}

export const loginReducer = (state = theState, action: ValidateUser | LogoutUser): UserState => {
  switch (action.type) {
    case 'VALIDATED_USER': {
      return {
        user: action.user
      }
    }
    case 'LOGOUT_USER': {
      return {
        user: []
      }
    }
    default:
      return state;
  }
};