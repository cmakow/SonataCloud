import React from 'react';
import { Link } from 'react-router';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    if (Object.keys(this.props.songs).length > 0) {
      return (
        <div className='songIndex'>
          <ul>
            {
              Object.keys(this.props.songs).map(id => (
                <SongIndexItem song={this.props.songs[id]}
                  key={id}
                  currentSong={this.props.currentSong}
                  receiveCurrentSong={this.props.receiveCurrentSong}
                  currentUser={this.props.currentUser}
                  deleteSong={this.props.deleteSong}
                />
              ))
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

export default SongIndex;
