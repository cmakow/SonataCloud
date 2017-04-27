import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='homePageContainer'>
        <div className='headerHomePage'>
          <h1 className='headerTitle'>SonataCloud</h1>
          <img src={window.headerImg} className='landingImg'/>
          <Link to='/login' className='homePageButton loginButton'>Login</Link>
          <Link to='/signup' className='homePageButton signupButton'>Sign up</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
