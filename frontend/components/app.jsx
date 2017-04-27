import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import CurrentSongContainer from './current_song/current_song_container';
import { Link } from 'react-router';

const App = (props) => {
  if (props.location.pathname === '/') {
    return (
      <div className='app'>
        { props.children }
        <CurrentSongContainer />
      </div>
    );
  } else {
    return (
      <div className="app">
        <NavBarContainer />
        { props.children }
        <CurrentSongContainer />
      </div>
    );
  }
};

export default App;
