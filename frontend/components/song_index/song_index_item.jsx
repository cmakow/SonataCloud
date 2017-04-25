import React from 'react';
import { Link, hashHistory } from 'react-router';
import SongProgressBar from './song_progress_bar';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.directToEdit = this.directToEdit.bind(this);
  }

  togglePlay(e) {
    // const song = this.refs.song;
    // if (song.paused) {
    //   song.play();
    //   e.currentTarget.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
    // } else {
    //   song.pause();
    //   e.currentTarget.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
    // }
    if (this.props.song === this.props.currentSong) {
      const song = $('audio')[0];
        if (song.paused) {
          song.play();
          this.setState({playing: true});
          e.currentTarget.innerHTML = "<i id='pause' class='fa fa-pause' aria-hidden='true'></i>";
        } else {
          song.pause();
          this.setState({playing: false});
          e.currentTarget.innerHTML = "<i id='play' class='fa fa-play' aria-hidden='true'></i>";
        }
    } else {
      this.props.receiveCurrentSong(this.props.song);
      e.currentTarget.innerHTML = "<i id='pause' class='fa fa-pause' aria-hidden='true'></i>";  
    }
  }

  removeSong(e) {
    e.preventDefault();
    this.props.deleteSong(this.props.song.id);
  }

  directToEdit() {
    this.props.editSong(this.props.song);
    hashHistory.push(`/edit/${this.props.song.id}`);
  }

  render() {
    const song = this.props.song;
    const currentUser = this.props.currentUser;
    let editButtons = (currentUser.id !== song.artist.id) ? null : (
      <div className='songEditInfo'>
        <button onClick={this.directToEdit}>Edit Song</button>
        <button onClick={this.removeSong}>Remove Song</button>
      </div>
    );
    return (
      <li className='songIndexItem'>
        {/* change this to actual artist image and link to artist page */}
        <img src={song.cover_art} className='artistImage'/>
        <button onClick={this.togglePlay} className='playButton'><i className='fa fa-play' aria-hidden='true'></i></button>
        <div className='songIndexItemHeader'>
          {/* change to link to user page later */}
          <p className='artistName'>{song.artist.username}</p>
          {/* make into link to song show page later */}
          <Link to={`/songs/${song.id}`} className='songTitle'>{song.title}</Link>
          <br/>
          { editButtons }
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
