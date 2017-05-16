import React from 'react';

class PlayButton extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
    this.isCurrentSong = this.isCurrentSong.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.song === newProps.currentSong) {
    }
  }

  togglePlay(e) {
    if(this.isCurrentSong()) {
      const song = $('audio')[0]
      if (this.props.playing) {
        this.props.pauseSong();
        song.pause();
      } else {
        this.props.playSong();
        song.play();
      }
    } else {
      this.props.receiveCurrentSong(this.props.song);
    }
  }

  isCurrentSong() {
    return this.props.song === this.props.currentSong;
  }

  render() {
    let idText;
    if(this.props.currentSongPlay) {
      idText = 'currentSongPlay';
    } else if (this.props.songShow) {
      idText = 'showPlayButton';
      if (this.props.playing) {
        idText = 'showPauseButton';
      }
    }
    let buttonText;
    if(this.isCurrentSong()) {
      if (this.props.playing) {
        if(this.props.songShow) {
          buttonText = <i id='showPause' className='fa fa-pause' aria-hidden='true'></i>;
        } else {
          buttonText = <i id='pause' className='fa fa-pause' aria-hidden='true'></i>;
        }
      } else {
        if(this.props.songShow) {
          buttonText = <i id='showPlay' className='fa fa-play' aria-hidden='true'></i>;
        } else {
          buttonText = <i id='play' className='fa fa-play' aria-hidden='true'></i>;
        }
      }
    } else {
      buttonText = <i id='play' className='fa fa-play' aria-hidden='true'></i>;
    }
    debugger
    return (
      <button onClick={this.togglePlay} className='playButton' id={idText}>{buttonText}</button>
    )
  }
}

export default PlayButton;
