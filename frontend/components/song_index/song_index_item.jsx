import React from 'react';
import { Link, hashHistory } from 'react-router';
import SongProgressBar from './song_progress_bar';
import PlayButtonContainer from '../play_button/play_button_container';
import WaveformContainer from '../waveform/waveform_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    const song = this.props.song;
    const currentUser = this.props.currentUser;
    let editButtons = (currentUser.id !== song.artist.id) ? null : (
      <div className='songEditInfo'>
        <button onClick={this.directToEdit}>Edit Song</button>
        <button onClick={this.removeSong}>Remove Song</button>
      </div>
    );
    const songUploadDate = new Date(this.props.song.date);
    const today = new Date();
    let timeDiff = Math.floor((today - songUploadDate)/36e5);
    let hours = 'hours';
    if (timeDiff === 1) {
      hours = 'hour';
    }
    if (timeDiff >= 24) {
      timeDiff = Math.floor(timeDiff / 24);
      if (timeDiff > 1) {
        hours = 'days';
      } else {
        hours = 'day';
      }
    }
    return (
      <li className='songIndexItemLi'>
        <div className='uploaderInfo'>
          <p><Link to={`/profile/${song.artist.id}`}>{song.artist.username}</Link> uploaded <Link to={`/songs/${song.id}`}>a track</Link> {timeDiff} {hours} ago.</p>
        </div>
        <div className='songIndexItem'>
          <img src={song.cover_art} className='artistImage'/>
          <PlayButtonContainer song={this.props.song} />
          <div className='songIndexItemHeader'>
            <div className='songIndexItemInfo'>
              <Link to={`/profile/${song.artist.id}`} className='artistName'>{song.artist.username}</Link> <br />
              <Link to={`/songs/${song.id}`} className='songTitle'>{song.title}</Link>
            </div>
            <WaveformContainer song={song} />
            <br/>
            <div className='songButtons'>
              { editButtons }
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
