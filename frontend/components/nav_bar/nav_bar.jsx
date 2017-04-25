import React from 'react';
import { Link } from 'react-router';
import UserSubComp from './user_sub_comp';
import SearchBarContainer from './search_bar/search_bar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navBar">
        <ul className="navBarUl">
          <div className='leftSideNav'>
            <Link to='/feed' className="navBarLink">
              <li>
                <img src={window.navBarIcon} className='homeIcon'></img> {/* Change to image of logo */}
              </li>
            </Link>
            <Link to='/feed' className="navBarLink homeButton">
              <li>
                Home
              </li>
            </Link>
          </div>
          {/* <li> */}
          {/*   <Link to='/charts' className="navBarLink">Charts</Link> */}
          {/* </li> */}
          <li>
            <SearchBarContainer />
          </li>
          <div className='rightSideNav'>
            <Link to='/upload' className="navBarLink uploadButton">
              <li>
                Upload
              </li>
            </Link>
            {/* <Link to='/profile' className="navBarLink">Sample User</Link> */}
            {/* <AuthFormContainer /> */}
            <UserSubComp currentUser={this.props.currentUser} logout={this.props.logout}/>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
