import React from 'react';
import { Link } from 'react-router';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const song = this.props.song;
    return (
      <li className='songIndexItem'>
        {song.title} - {song.artist.username} {/* make into link to user show page later */}
        <audio src={window.gardenSong}/>
      </li>
    );
  }
}

export default SongIndex;
