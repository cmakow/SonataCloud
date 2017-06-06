import React from 'react';

class Waveform extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let height = '75';
    if(this.props.songShow) {
      height = '200';
    }
    this.wavesurfer = WaveSurfer.create({
      container: `#waveform-${this.props.song.id}`,
      waveColor: 'gray',
      progressColor: '#f50',
      height: `${height}`,
      barWidth: 3,
      cursorWidth: '0'
    });
    this.wavesurfer.load(this.props.song.data)
  }

  handleClick(e) {
    if(this.props.song.id === this.props.currentSong.id) {
      const audio = $('audio')[0];
      const mouseX = e.nativeEvent.layerX;
      const newTime = mouseX / 700 * audio.duration
      audio.currentTime = newTime;
    }
  }

  render() {
    let classname = 'waveform';
    if (this.props.songShow) {
      classname = 'songShowWaveform';
    }
    return (
      <div className={classname}>
        <div id={`waveform-${this.props.song.id}`} onClick={this.handleClick}></div>
      </div>
    )
  }
}

export default Waveform;
