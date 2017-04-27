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
    //
    // this.props.songs.forEach(song => {
    //   let sub = song.title.slice(0, this.state.input.length);
    //   if (sub.toLowerCase() === this.state.input.toLowerCase()) {
    //     matches.push(song);
    //   }
    // });
    //
    // if (matches.length === 0) {
    //   matches.push('No results');
    // }
    //
    // return matches;
  }

  render() {
    // let potentialMatches;
    // if(this.props.songs) {
    //   if(this.props.songs.length > 0) {
    //     potentialMatches = this.matches();
    //   }
    // }
    // let results = null;
    // if(potentialMatches) {
    //   if(Object.keys(potentialMatches).length > 0) {
    //     results = this.matches().map((result, i) => {
    //       return (
            // <Link to={`/songs/${result.id}`} className='searchResultLink'>
            //   <li key={i} className='searchResultLi'>
            //     <img src={result.cover_art} className='searchResultIcon'/>
            //     <div className='searchResultTitle'>{result.title}</div>
            //   </li>
            // </Link>
    //       );
    //     });
    //   }
    // }
    // if(this.state.input.length === 0) {
    //   results = null;
    // }
    let matches;
    if(this.state.input.length > 0) {
      if(Object.keys(this.props.songs).length > 0) {
        matches = Object.values(this.props.songs).map((song, i) => {
          return (
            <Link to={`/songs/${song.id}`} className='searchResultLink'>
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
