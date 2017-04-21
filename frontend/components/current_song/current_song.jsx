import React from 'react';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(e) {
    const song = this.refs.song;
    debugger
    if (song.paused) {
      song.play();
      e.currentTarget.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
    } else {
      song.pause();
      e.currentTarget.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
    }
  }

  componentWillReceiveProps(newProps) {
    const song = this.refs.song;
    if(this.props.playing) {
      if(song.paused) {

      }
    } else {

    }
  }

  render() {
    if(this.props.currentSong) {
      debugger
      return (
        <div className='currentSongPlayer'>
          <audio ref='song' src={this.props.currentSong.data} />
          <button onClick={this.togglePlay} className='playButton'><i className='fa fa-pause' aria-hidden='true'></i></button>
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
