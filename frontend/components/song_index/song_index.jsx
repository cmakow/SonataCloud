import React from 'react';
import { Link } from 'react-router';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Object.keys(this.props.songs).length > 0) {
      return (
        <div className='songIndex'>
          <h1>Here's the latest songs:</h1>
          <ul>
            {
              Object.keys(this.props.songs).map(id => (
                <SongIndexItem song={this.props.songs[id]}
                  key={id}
                  currentSong={this.props.currentSong}
                  receiveCurrentSong={this.props.receiveCurrentSong}
                  currentUser={this.props.currentUser}
                  deleteSong={this.props.deleteSong}
                  editSong={this.props.editSong}
                />
              ))
            }
          </ul>
        </div>
      );
    } else {
      let text = 'Nothing here!';
      if (this.props.currentUser && this.props.profileUser) {
        if (this.props.currentUser.id === this.props.profileUser.id) {
          text = 'Nothing here! Get started by uploading your music!';
        }
      }
      return (
        <div className='songIndex'>
          <h1>
            {text}
          </h1>
        </div>
      );
    }
  }
}

export default SongIndex;
