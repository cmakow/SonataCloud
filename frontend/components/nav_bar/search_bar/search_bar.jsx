import React from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleChange(e) {
    this.setState({input: e.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.input.length === 0) {
      return this.props.songs;
    }

    this.props.songs.forEach(song => {
      let sub = song.title.slice(0, this.state.input.length);
      if (sub.toLowerCase() === this.state.input.toLowerCase()) {
        matches.push(song);
      }
    });

    if (matches.length === 0) {
      matches.push('No results');
    }

    return matches;
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({input: name});
  }

  render() {
    let potentialMatches = this.matches();
    let results = null;
    if(Object.keys(potentialMatches).length > 0) {
      results = this.matches().map((result, i) => {
        return (
          <Link to={`/songs/${result.id}`} className='searchResultLink'>
            <li key={i} className='searchResultLi'>
              <img src={result.cover_art} className='searchResultIcon'/>
              <div className='searchResultTitle'>{result.title}</div>
            </li>
          </Link>
        );
      });
    }
    if(this.state.input.length === 0) {
      results = null;
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
          { results }
        </ul>
      </div>
    );
  }
}

export default SearchBar;
