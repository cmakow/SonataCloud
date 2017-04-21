import React from 'react';
import { Link } from 'react-router';
import SongIndexContainer from '../song_index/song_index_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserSongs(this.props.currentUser.id);
  }

  render() {
    return (
      <div className='feed'>
        <SongIndexContainer songs={this.props.songs} currentSong={this.props.currentSong}/>
      </div>
    );
  }
}

export default Feed;
