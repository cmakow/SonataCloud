import React from 'react';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    const song = this.refs.song;
    if (song.paused) {
      song.play();
      e.currentTarget.innerHTML = "<i id='pause' class='fa fa-pause' aria-hidden='true'></i>";
    } else {
      song.pause();
      e.currentTarget.innerHTML = "<i id='play' class='fa fa-play' aria-hidden='true'></i>";
    }
  }

  render() {
    if(this.props.currentSong) {
      return (
        <div className='currentSongPlayer'>
          <audio ref='song' src={this.props.currentSong.data} />
          <button onClick={this.togglePlay} className='playButton' id='currentSongPlay'><i id='play' className='fa fa-play' aria-hidden='true'></i></button>
        </div>
      );
    } else {
      return (
        <div className='xd'></div>
      );
    }
  }
}

export default CurrentSong;
