import { combineReducers, createStore, applyMiddleware } from 'redux';
import { postsReducer } from './posts/reducer';
import { commentsReducer } from './comments/reducer';
import { PostsState } from './posts/types';
import { CommentsState } from './comments/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { loginReducer } from './login/reducer';
import { UserState } from './login/types';

export type RootState = {
  postsState: PostsState,
  commentsState: CommentsState,
  userState: UserState | any 
};

const reducer = combineReducers <RootState>({
  postsState: postsReducer,
  commentsState: commentsReducer,
  userState: loginReducer,
});



export const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(ReduxThunk),
));