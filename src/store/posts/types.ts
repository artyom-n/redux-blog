export type AllActions = setPosts;

export const SET_POSTS = 'SET_POSTS ';

export interface PostsState {
    posts: PostType[];
  }

export type PostType = {
    userId: string,
    id: number,
    title: string,
    body: string,
  }
  
  export type setPosts = {
    type: typeof SET_POSTS;
    posts: PostType[];
  };