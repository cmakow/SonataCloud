import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.currentTarget.value});
    if(e.currentTarget.value.length > 0) {
      this.props.fetchSearchSongs(e.currentTarget.value);
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location.pathname !== newProps.location.pathname) {
      this.setState({input: ''});
    }
  }

  componentDidMount() {
    this.props.fetchSearchSongs('ALLSONGS#145123');
  }

  matches() {
    const matches = {};
    if (this.state.input.length === 0) {
      return matches;
    }
  }

  render() {
    let matches;
    if(this.state.input.length > 0) {
      if(Object.keys(this.props.songs).length > 0) {
        matches = Object.keys(this.props.songs).map(id => this.props.songs[id]).map((song, i) => {
          return (
            <Link to={`/songs/${song.id}`} className='searchResultLink' key={i}>
              <li key={i} className='searchResultLi'>
                <img src={song.cover_art} className='searchResultIcon'/>
                <div className='searchResultTitle'>{song.title}</div>
              </li>
            </Link>
          );
        });
      }
    }
    return (
      <div className='searchBar'>
        <input
            className='searchBarInput'
            type="text"
            placeholder="Search"
            value={this.state.input}
            onChange={this.handleChange}
        />
        <ul className='searchResults'>
           {/* results */}
           { matches }
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchBar);
