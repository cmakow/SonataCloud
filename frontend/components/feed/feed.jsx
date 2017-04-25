import React from 'react';
import { Link, withRouter } from 'react-router';
import SongIndexContainer from '../song_index/song_index_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const loc = location.hash.slice(2);
    if (loc === 'feed') {
      this.props.fetchSongs();
    } else if (loc.startsWith('profile')) {
      this.props.fetchUserSongs(this.props.params.user_id);
    }
  }

  render() {
    return (
      <div className='feed'>
        <SongIndexContainer songs={this.props.songs} currentSong={this.props.currentSong}/>
        {/* SideBarContainer? */}
      </div>
    );
  }
}

export default withRouter(Feed);
