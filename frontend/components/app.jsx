import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Link } from 'react-router';

const App = ({ children }) => {
  return (
    <div className="app">
      <NavBarContainer />
      { children }
      <div className="footer">
      </div>
    </div>
  );
}

export default App;
