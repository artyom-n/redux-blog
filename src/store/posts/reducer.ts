import { PostsState, AllActions, SET_POSTS } from './types';

const initialState: PostsState = {
    posts: []
  };
  
  export const postsReducer = (state = initialState, action: AllActions): PostsState => {
    switch (action.type) {
      case SET_POSTS: {
        return {
          posts: action.posts,
        };
      }
      default:
        return state;
    }
  };
  