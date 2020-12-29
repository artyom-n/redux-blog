
import { ValidateUser,UserState } from './types';

const initialState: UserState = {
  users: [
    {
      firstName: "Andris",
      secondName: "D",
      password: "1",
      loggedIn: false,
      type: "admin"
    }]
}


export const loginReducer = (state = initialState, action: ValidateUser) => {
  switch (action.type) {
    case 'VALIDATE_USER': {
      return {
        ...state, loggedIn: true
      };
    }
    default:
      return state;
  }
};