import React from 'react';
import { hashHistory } from 'react-router';

class Song extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: null,
      isCurrentSong: false
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.directToEdit = this.directToEdit.bind(this);
  }

  removeSong(e) {
    e.preventDefault();
    this.props.deleteSong(this.props.song.id);
  }

  directToEdit() {
    this.props.editSong(this.props.song);
    hashHistory.push(`/edit/${this.props.song.id}`);
  }

  componentDidMount() {
    const song = this.props.fetchSong(this.props.params.id);
    this.setState({ song });
  }

  togglePlay(e) {
    if (this.state.isCurrentSong) {
      const song = $('audio')[0];
        if (song.paused) {
          song.play();
          this.setState({playing: true});
          e.currentTarget.innerHTML = "<i id='showPause' class='fa fa-pause' aria-hidden='true'></i>";
        } else {
          song.pause();
          this.setState({playing: false});
          e.currentTarget.innerHTML = "<i id='play' class='fa fa-play' aria-hidden='true'></i>";
        }
    } else {
      this.props.receiveCurrentSong(this.props.song);
      e.currentTarget.innerHTML = "<i id='showPause' class='fa fa-pause' aria-hidden='true'></i>";
      this.setState({isCurrentSong: true})
    }
  }

  render() {
    const song = this.props.song;
    let editButtons;
    if(song) {
      editButtons = (currentUser.id !== song.artist.id) ? null : (
        <div className='songEditInfo showEdit'>
          <button onClick={this.directToEdit}>Edit Song</button>
          <button onClick={this.removeSong}>Remove Song</button>
        </div>
      );
    }
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
            { editButtons }
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
