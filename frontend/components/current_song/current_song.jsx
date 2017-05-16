import React from 'react';
import PlayButtonContainer from '../play_button/play_button_container';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);

    // this.togglePlay = this.togglePlay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.toggleVolume = this.toggleVolume.bind(this);
    this.renderVolumeButton = this.renderVolumeButton.bind(this);

    this.state = {
      volume: 1,
      currentTime: 0,
      duration: 0,
      playing: false,
      lastVol: null
    };
  }

  // componentWillReceiveProps(newProps) {
  //   const song = this.refs.song;
  //   if(newProps.playing !== this.props.playing) {
  //     if (newProps.playing) {
  //       this.setState({playing: true});
  //       song.play();
  //     } else {
  //       this.setState({playing: false});
  //       song.pause();
  //     }
  //   }
  // }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.playing) {
        this.setState({currentTime: this.refs.song.currentTime});
      }
    }, 50); //THANKS BRANDON
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

  toggleVolume(e) {
    e.preventDefault();
    const song = this.refs.song;
    const vol = song.volume;
    let target;
    if (vol > 0) {
      this.setState({lastVol: vol, volume: 0});
      song.volume = 0;
      e.currentTarget.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    } else {
      target = this.state.lastVol;
      this.setState({lastVol: 0, volume: target});
      song.volume = target;
      e.currentTarget.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    }
  }

  renderVolumeButton() {
    if(this.refs.song) {
      const song = this.refs.song;
      const vol = song.volume;
      let volumeButton;
      if(vol > 0) {
        volumeButton = <button onClick={this.toggleVolume} className='volumeButton'><i className="fa fa-volume-up" aria-hidden="true"></i></button>;
      } else {
        volumeButton = <button onClick={this.toggleVolume} className='volumeButton'><i className="fa fa-volume-off" aria-hidden="true"></i></button>;
      }
      return volumeButton;
    }
  }

  render() {
    let playButton = <i id='pause' className='fa fa-pause' aria-hidden='true'></i>;
    if(this.props.currentUser) {
      if(this.props.currentSong) {
        // if (this.refs.song) {
        //   playButton = this.refs.song.paused ? <i id='play' className='fa fa-play' aria-hidden='true'></i> : <i id='pause' className='fa fa-pause' aria-hidden='true'></i>;
        // }
        const songInfo = `${this.props.currentSong.title} - ${this.props.currentSong.artist.username}`;
        let songInfoComponent;
        if (songInfo.length > 20) {
          songInfoComponent = <marquee>{songInfo}</marquee>;
        } else {
          songInfoComponent = songInfo;
        }
        return (
          <div className='currentSongPlayer'>
            <div className='currentSongControls'>
              <audio ref='song' src={this.props.currentSong.data} />
              <img src={this.props.currentSong.cover_art} className='currentSongThumb' />
              <PlayButtonContainer currentSongPlay='true' song={this.props.currentSong}/>
              {/* <button onClick={this.togglePlay} className='playButton' id='currentSongPlay'><i id='pause' className='fa fa-pause' aria-hidden='true'></i></button> */}
              <div className='progressBarContainer'>
                {this.parseTime(this.state.currentTime)}
                <progress className='songProgressBar' value={this.state.currentTime} max={this.state.duration}></progress>
                {this.parseTime(this.state.duration)}
              </div>
              { this.renderVolumeButton() }
              <input
                type='range'
                className='volumeSlider'
                onChange={this.updateVolume}
                value={this.state.volume * 100}
                min='0' max='100'
                />
              <p className='songInfo'>
                {songInfoComponent}
              </p>
            </div>
          </div>
        );
      } else {
        return (
          <div className='xD'></div>
        );
      }
    } else {
      return (
        <div className='xD'></div>
      );
    }
  }
}

export default CurrentSong;
