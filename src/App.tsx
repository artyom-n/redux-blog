import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import NotFound from './pages/404'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/';
import { PostsState, PostType, SET_POSTS } from './store/posts/types';
import { CommentsState } from './store/comments/types';
import { setComment } from './store/comments/actions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";

export const getPosts = (): Promise<PostType[]> => {
  return axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => data)
}

const App = () => {  

  const postsState = useSelector<RootState, PostsState>(state => state.postsState)

  const commentsState = useSelector<RootState, CommentsState>(state => state.commentsState)

  const dispatch = useDispatch()

  useEffect(() => {  
    if (postsState.posts.length === 0) {
      getPosts().then(response => dispatch({ type: SET_POSTS, posts: response }))
    }
  }, [postsState.posts]);  

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
    <><br />
      <Router>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/">Home</Link>
        &nbsp; &nbsp; &nbsp;
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/">
            <Home posts={postsState.posts} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path={"/posts/:id"}>
            <Posts posts={postsState.posts} comments={commentsState.comments} onAddComment={onAddComment} />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
      </Router></>
  );
}
export default App;