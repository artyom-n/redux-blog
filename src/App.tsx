import React, { useCallback, useEffect } from 'react';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import NotFound from './pages/404'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/';
import { PostsState } from './store/posts/types';
import { CommentsState } from './store/comments/types';
import { setComment } from './store/comments/actions';
import Navigation from './components/navigation'

import {
  BrowserRouter as Router,
  Route,
  Switch  
} from "react-router-dom";
import { setPost } from './store/posts/actions';
import Login from './pages/login';

const App = () => {

  const postsState = useSelector<RootState, PostsState>(state => state.postsState)

  const commentsState = useSelector<RootState, CommentsState>(state => state.commentsState)

  const dispatch = useDispatch()

  const initFetch = useCallback(() => {
    dispatch(setPost());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const onAddComment = (postId: number, comment: string) => {
    const post = commentsState.comments.find(x => x.postId === postId)

    if (post) {
      post.comments = [comment, ...post.comments]
    } else {
      dispatch(setComment([
        ...commentsState.comments,
        {
          postId: postId,
          comments: [comment]
        }
      ]))
    }
  };

  return (
    <>      
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home posts={postsState.posts} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path={"/posts/:id"}>
            <Posts posts={postsState.posts} comments={commentsState.comments} onAddComment={onAddComment} />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;