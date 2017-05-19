import React from 'react';
import { hashHistory } from 'react-router';
import CommentIndexContainer from '../comment/comment_index_container';
import PlayButtonContainer from '../play_button/play_button_container';
import WaveformContainer from '../waveform/waveform_container';

class Song extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: null,
      isCurrentSong: false
    };

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
    this.props.fetchSong(this.props.params.song_id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.song_id !== newProps.params.song_id) {
      this.props.fetchSong(newProps.params.song_id);
    }
  }

  render() {
    const song = this.props.song;
    let editButtons;
    if(this.props.currentUser && song) {
      editButtons = (this.props.currentUser.id !== song.artist.id) ? null : (
        <div className='songEditInfo showEdit'>
          <button onClick={this.directToEdit}>Edit Song</button>
          <button onClick={this.removeSong}>Remove Song</button>
        </div>
      );
    }
    if(this.props.currentUser && song) {
      return (
        <div className='songShowPage'>
          <div className='songShowHeader'>
            <div className='songShowHeaderInfo'>
              <PlayButtonContainer song={song} songShow='true' />
              <div className='songShowInfo'>
                <p>{song.artist.username}</p>
                <h2>{song.title}</h2>
                <WaveformContainer songShow='true' song={song} />
              </div>
            </div>
            <div className='songShowCoverArt'>
              <img src={song.cover_art} />
              { editButtons }
            </div>
          </div>
          <CommentIndexContainer song={song} />
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
