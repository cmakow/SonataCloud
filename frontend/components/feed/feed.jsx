import React from 'react';
import { Link, withRouter } from 'react-router';
import SongIndexContainer from '../song_index/song_index_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.offsetIncrementer = 10;
    this.state = {
      offset: 0,
      user_id: null
    }

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    const loc = location.hash.slice(2);
    if (loc === 'feed') {
      this.props.fetchSongs(this.state.offset);
      this.setState({offset: `${this.offsetIncrementer}`});
    } else if (loc.startsWith('profile')) {
      this.props.fetchUserSongs(this.props.params.user_id);
    }
  }

  componentWillReceiveProps(newProps) {
    if(String(newProps.user_id) !== this.state.user_id) {
      this.setState({user_id: `${newProps.user_id}`, offset: 0})
      if(newProps.user_id) {
        this.props.clearSongs();
        this.props.fetchUserSongs(newProps.params.user_id, 0);
        this.setState({offset: `${this.offsetIncrementer}`});
      } else {
        this.props.clearSongs();
        this.props.fetchSongs(0);
        this.setState({offset: `${this.offsetIncrementer}`});
      }
    }
  }

  loadMore(e) {
    const newOffset = parseInt(this.state.offset) + this.offsetIncrementer;
    if(this.state.user_id !== 'undefined') {
      this.props.fetchUserSongs(this.state.user_id, parseInt(this.state.offset));
    } else {
      this.props.fetchSongs(parseInt(this.state.offset));
    }
    this.setState({offset: `${newOffset}`});
  }

  render() {
    return (
      <div className='feed'>
        <SongIndexContainer songs={this.props.songs} currentSong={this.props.currentSong}/>
        {/* SideBarContainer? */}

        <button className='loadMore' onClick={this.loadMore}>Load More Music</button>
      </div>
    );
  }
}

export default withRouter(Feed);
