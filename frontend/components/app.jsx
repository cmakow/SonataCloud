import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link } from 'react-router';

const App = ({ children }) => {
  if (children) {
    return (
      <div>
        { children }
      </div>
    );
  } else {
    return (
      <div>
        <h1>SonataCloud</h1>
        <Link to='/login'>Login!</Link>
        <br />
        <Link to='/signup'>Sign up!</Link>
      </div>
    )
  }
}

export default App;
