import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Navigation = () => {

  const userState: any = useSelector<RootState>(state => state.userState.user)

  console.log('nav', userState)

  return (
    <header className="header">
      <div className="container">
        <div className="row center-xs middle-xs">
          <div className="col-xs-3">
            <div className="logo">
              <img src="https://www.krenerbookkeeping.com/wp-content/uploads/2017/05/blogger-logo-icon-png-22.png" alt="logo" width="50" />
            </div>
          </div>
          <div className="col-xs-6">            
              <Link className="Link" to="/">Home</Link>
              <Link className="Link" to="/about">About</Link>
              <Link className="Link" to="/login">Login</Link>            
          </div>
          <div className="col-xs-3">
            {userState.length === 0 ? "" : `You are logged in as ${userState[0].type}`}
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
