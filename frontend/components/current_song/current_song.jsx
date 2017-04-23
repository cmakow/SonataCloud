import React from 'react';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);

    this.state = {
      volume: 1
    }
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

  updateVolume(e) {
    e.preventDefault();
    const song = this.refs.song;
    const targetVol = (e.target.value / 100);
    this.setState({volume: targetVol});
    song.volume = targetVol;
  }

  componentDidUpdate(props) {
    // this.refs.song.play(); //updates when volume slider changed - see if we can fix later
  }

  render() {
    if(this.props.currentSong) {
      return (
        <div className='currentSongPlayer'>
          <audio ref='song' src={this.props.currentSong.data} />
          <button onClick={this.togglePlay} className='playButton' id='currentSongPlay'><i id='play' className='fa fa-pause' aria-hidden='true'></i></button>
          <p className='songInfo'>
            {this.props.currentSong.title} - {this.props.currentSong.artist.username}
          </p>
          <input
            type='range'
            className='volumeSlider'
            onChange={this.updateVolume}
            value={this.state.volume * 100}
            min='0' max='100'
          />
        </div>
      );
    } else {
      return (
        <div className='xD'></div>
      );
    }
  }
}

export default CurrentSong;
