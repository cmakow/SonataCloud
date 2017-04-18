import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navBar">
        <ul className="navBarUl">
          <li>
            <Link to='/feed' className="navBarLink"><img src={window.navBarIcon} height="50px"></img></Link> {/* Change to image of logo */}
          </li>
          <li>
            <Link to='/feed' className="navBarLink">Home</Link>
          </li>
          <li>
            <Link to='/charts' className="navBarLink">Charts</Link>
          </li>
          <li>
            {/* <SearchBarContainer /> */}
          </li>
          <li>
            <Link to='/upload' className="navBarLink">Upload</Link>
          </li>
          <li>
            <Link to='/profile' className="navBarLink">Sample User</Link>
            {/* <AuthFormContainer /> */}
          </li>
          <li>
            {/* <DropdownMenuContainer /> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
