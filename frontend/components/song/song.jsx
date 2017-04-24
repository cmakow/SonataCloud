import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const song = this.props.song;
    return (
      <div className='songShowHeader'>
        <button onClick={this.togglePlay} className='playButton'><i className='fa fa-play' aria-hidden='true'></i></button>
        <div className='songShowInfo'>
          <p>{song.artist.username}</p>
          <h2>{song.title}</h2>
        </div>
        <div className='songShowCoverArt'>
          <img src={song.cover_art} />
        </div>
      </div>
    );
  }
}

export default Song;
