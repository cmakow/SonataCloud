import React from 'react';
import { Link } from 'react-router';
import SongProgressBar from './song_progress_bar';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
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
    debugger
    if (this.props.song === this.props.currentSong) {
      
    } else {
      this.props.receiveCurrentSong(this.props.song);
    }
  }

  render() {
    const song = this.props.song;
    return (
      <li className='songIndexItem'>
        {/* change this to actual artist image and link to artist page */}
        <img src={window.defaultUserImg} className='artistImage'/>
        <button onClick={this.togglePlay} className='playButton'><i className='fa fa-play' aria-hidden='true'></i></button>
        <div className='songIndexItemHeader'>
          {/* change to link to user page later */}
          <p className='artistName'>{song.artist.username}</p>
          {/* make into link to song show page later */}
          <p className='songTitle'>{song.title}</p>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
