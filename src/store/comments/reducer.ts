import { CommentsState, AllActions, SET_COMMENTS } from './types';

const initialState: CommentsState = {
    comments: []
  };
  
  export const commentsReducer = (state = initialState, action: AllActions): CommentsState => {
    switch (action.type) {
      case SET_COMMENTS: {
        return {
          comments: action.comments,
        };
      }
      default:
        return state;
    }
  };
  