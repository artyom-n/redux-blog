
import { ValidateUser, UserState } from './types';

const theState = {
  user: []
}


export const loginReducer = (state = theState, action: ValidateUser): UserState => {
  switch (action.type) {
    case 'VALIDATED_USER': {
      return {
        user: action.user
      }
    }
    default:
      return state;
  }
};