import React from 'react';
import { withRouter } from 'react-router'
import PlayButtonContainer from '../play_button/play_button_container';

class CurrentSong extends React.Component {
  constructor(props) {
    super(props);

    // this.togglePlay = this.togglePlay.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleWaveClick = this.handleWaveClick.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.toggleVolume = this.toggleVolume.bind(this);
    this.renderVolumeButton = this.renderVolumeButton.bind(this);
    this.waveOnClickSetup = this.waveOnClickSetup.bind(this);

    this.state = {
      volume: 1,
      currentTime: 0,
      duration: 0,
      playing: false,
      lastVol: null
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.playing) {
        this.setState({currentTime: this.refs.song.currentTime});
      }
    }, 30); //THANKS BRANDON
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateTime() {
    const progress_bar = $('.audio-player-progress-bar')
    const newProgressWidth = (this.state.currentTime / this.state.duration) * 720;
    progress_bar.css('width', newProgressWidth);
    if(this.props.currentSong) {
      const waveform = $(`#waveform-${this.props.currentSong.id}`)[0]
      if(waveform) {
        if(waveform.firstChild) {
          if(waveform.firstChild.firstChild) {
            const newWaveWidth = (this.state.currentTime / this.state.duration) * 700;
            waveform.firstChild.firstChild.style.width = `${newWaveWidth}px`;
          }
        }
      }
    }
  }

  handleWaveClick(e) {
    const mouseX = e.originalEvent.layerX;
    const newTime = mouseX / 700 * this.state.duration
    this.refs.song.currentTime = newTime;
  }

  handleClick(e) {
    const mouseX = e.nativeEvent.layerX;
    const newTime = mouseX / 720 * this.state.duration
    this.refs.song.currentTime = newTime;
  }

  updateVolume(e) {
    e.preventDefault();
    const song = this.refs.song;
    const targetVol = (e.target.value / 100);
    this.setState({volume: targetVol});
    song.volume = targetVol;
  }

  waveOnClickSetup(newProps = this.props) {
    const waveform = $(`#waveform-${newProps.currentSong.id}`)
    if(waveform) {
      if(this.waveform) {
        if(this.waveform[0].firstChild) {
          if(this.waveform[0].firstChild.firstChild) {
            this.waveform[0].firstChild.firstChild.style.width = 0;
          }
        }
        this.waveform.off('click');
      }
      waveform.on('click', this.handleWaveClick);
      this.waveform = waveform;
    }
  }

  // componentWillReceiveProps(newProps) {
  //   if(newProps.currentSong) {
  //     if(this.props.location.pathname !== newProps.location.pathname){
  //       if(newProps.params.song_id) {
  //         if(Number(newProps.params.song_id) === newProps.currentSong.id) {
  //           this.waveOnClickSetup(newProps);
  //         }
  //       } else if (newProps.params.user_id) {
  //         debugger
  //         this.waveOnClickSetup(newProps);
  //       } else if (newProps.location.pathname === '/feed') {
  //         this.waveOnClickSetup(newProps);
  //       }
  //     }
  //   }
  // }

  componentDidUpdate(oldProps) {
    const song = this.refs.song;
    if(oldProps.currentSong !== this.props.currentSong) {
      // this.waveOnClickSetup();
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
        this.updateTime();
        return (
          <div className='currentSongPlayer'>
            <div className='currentSongControls'>
              <audio ref='song' src={this.props.currentSong.data} />
              <img src={this.props.currentSong.cover_art} className='currentSongThumb' />
              <PlayButtonContainer currentSongPlay='true' song={this.props.currentSong}/>
              {/* <button onClick={this.togglePlay} className='playButton' id='currentSongPlay'><i id='pause' className='fa fa-pause' aria-hidden='true'></i></button> */}
              <div className='progressBarContainer'>
                {this.parseTime(this.state.currentTime)}
                {/* <progress className='songProgressBar' value={this.state.currentTime} max={this.state.duration}></progress> */}
                <span className="audio-player-progress" onClick={this.handleClick}>
                  <span className="audio-player-progress-bar"></span>
                </span>
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

export default withRouter(CurrentSong);
