import { combineReducers, createStore } from 'redux';
import { postsReducer } from './posts/reducer';
import { commentsReducer } from './comments/reducer';
import { PostsState } from './posts/types';
import { CommentsState } from './comments/types';

const reducer = combineReducers<RootState>({
    postsState: postsReducer,
    commentsState: commentsReducer,
  }); 

export type RootState = {
    postsState: PostsState;
    commentsState: CommentsState;
  };

// @ts-ignore
export const store = createStore(reducer);
