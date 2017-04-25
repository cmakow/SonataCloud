import React from 'react';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);

    this.state = {
      volume: 1,
      currentTime: 0,
      duration: 0,
      playing: false
    };
  }

  togglePlay(e) {
    const song = this.refs.song;
    if (song.paused) {
      song.play();
      this.setState({playing: true});
      e.currentTarget.innerHTML = "<i id='pause' class='fa fa-pause' aria-hidden='true'></i>";
    } else {
      song.pause();
      this.setState({playing: false});
      e.currentTarget.innerHTML = "<i id='play' class='fa fa-play' aria-hidden='true'></i>";
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.playing) {
        this.setState({currentTime: this.refs.song.currentTime});
      }
    }, 1000); //THANKS BRANDON
  }

  updateVolume(e) {
    e.preventDefault();
    const song = this.refs.song;
    const targetVol = (e.target.value / 100);
    this.setState({volume: targetVol});
    song.volume = targetVol;
  }

  componentDidUpdate(oldProps) {
    const song = this.refs.song;
    if(oldProps.currentSong !== this.props.currentSong) {
      song.play().then(() => {
        this.setState({duration: song.duration, playing: true});
      });
    }
  }

  parseTime(duration) {
    let seconds = Math.floor(duration % 60);
    let minutes = Math.floor(duration / 60);
    if (minutes < 10) {
      minutes = "0" + parseInt(minutes);
    }
    if (seconds < 10) {
      seconds = "0" + parseInt(seconds);
    }
    return (`${minutes}:${seconds}`);
  }

  render() {
    let playButton = <i id='pause' className='fa fa-pause' aria-hidden='true'></i>;
    if (this.refs.song) {
      playButton = this.refs.song.paused ? <i id='play' className='fa fa-play' aria-hidden='true'></i> : <i id='pause' className='fa fa-pause' aria-hidden='true'></i>;
    }
    if(this.props.currentSong) {
      return (
        <div className='currentSongPlayer'>
          <div className='currentSongControls'>
            <audio ref='song' src={this.props.currentSong.data} />
            <img src={this.props.currentSong.cover_art} className='currentSongThumb' />
            <button onClick={this.togglePlay} className='playButton' id='currentSongPlay'>{playButton}</button>
            <div className='progressBarContainer'>
              {this.parseTime(this.state.currentTime)}
              <progress className='songProgressBar' value={this.state.currentTime} max={this.state.duration}></progress>
              {this.parseTime(this.state.duration)}
            </div>
            <input
              type='range'
              className='volumeSlider'
              onChange={this.updateVolume}
              value={this.state.volume * 100}
              min='0' max='100'
              />
            <p className='songInfo'>
              {this.props.currentSong.title} - {this.props.currentSong.artist.username}
            </p>
          </div>
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
