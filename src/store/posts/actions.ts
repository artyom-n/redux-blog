import { SET_POSTS , PostType, setPosts } from './types';

export const setPost = (posts: PostType[]): setPosts => {
  return {
    type: SET_POSTS,
    posts
  };
};
