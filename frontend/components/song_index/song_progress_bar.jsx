import React from 'react';

class SongProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {song: null};
  }

  componentDidMount() {
    this.setState({song: $(`#${this.props.songId}`)[0]});
    debugger
  }

  render() {
    if (this.state.song) {
      const currentSong = this.state.song;
      return (
        <div className='songProgressBar'>
          <progress id='seekbar' value={currentSong.currentTime} max={currentSong.duration}/>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default SongProgressBar;
