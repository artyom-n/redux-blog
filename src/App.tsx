import React, { useCallback, useEffect } from 'react';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Posts from './pages/posts'
import NotFound from './pages/404'
import { useDispatch } from 'react-redux';

import Navigation from './components/navigation'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { setPost } from './store/posts/actions';
import Login from './pages/login';

const App = () => {

  const dispatch = useDispatch()

  const initFetch = useCallback(() => {
    dispatch(setPost());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/posts/:id">
            <Posts />
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