import { combineReducers, createStore, applyMiddleware } from 'redux';
import { postsReducer } from './posts/reducer';
import { commentsReducer } from './comments/reducer';
import { PostsState } from './posts/types';
import { CommentsState } from './comments/types';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers<RootState>({
  postsState: postsReducer,
  commentsState: commentsReducer,
});

export type RootState = {
  postsState: PostsState;
  commentsState: CommentsState;
};

export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(),
));