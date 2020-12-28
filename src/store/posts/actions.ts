import axios from 'axios';
import { SET_POSTS, PostType, setPosts } from './types';

const setPostAction = (posts: PostType[]): setPosts => {
  return {
    type: SET_POSTS,
    posts
  };
};

export const setPost = () => {
  return async (dispatch: (arg0: setPosts) => void) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data);
    dispatch(setPostAction(data));
  };
};