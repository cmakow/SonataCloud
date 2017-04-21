import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import CurrentSongContainer from './current_song/current_song_container';
import { Link } from 'react-router';

const App = ({ children }) => {
  return (
    <div className="app">
      <NavBarContainer />
      { children }
      <CurrentSongContainer />
    </div>
  );
}

export default App;
