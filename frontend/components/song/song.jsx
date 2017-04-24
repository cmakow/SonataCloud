import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: null
    };

    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    const song = this.props.fetchSong(this.props.params.id);
    this.setState({ song });
  }

  togglePlay(e) {
    if (this.props.song === this.props.currentSong) {

    } else {
      this.props.receiveCurrentSong(this.props.song);
    }
  }

  render() {
    const song = this.props.song;
    if(song) {
      return (
        <div className='songShowHeader'>
          <div className='songShowHeaderInfo'>
            <button onClick={this.togglePlay} className='showPlayButton'><i className='fa fa-play' aria-hidden='true'></i></button>
            <div className='songShowInfo'>
              <p>{song.artist.username}</p>
              <h2>{song.title}</h2>
            </div>
          </div>
          <div className='songShowCoverArt'>
            <img src={song.cover_art} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default Song;
