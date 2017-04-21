import React from 'react';

class SongProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const song = this.props.song;
    return (
      <div className='songProgressBar'>
        {song.currentTime} / {song.duration}
      </div>
    );
  }
}

export default SongProgressBar;
