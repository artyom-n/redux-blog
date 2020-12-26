import { SET_COMMENTS , CommentType, setComments } from './types';

export const setComment = (comments: CommentType[]): setComments => {
  return {
    type: SET_COMMENTS,
    comments
  };
};

