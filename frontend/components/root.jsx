import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';
import ProfilePageContainer from './profile_page/profile_page_container';
import FeedContainer from './feed/feed_container';
import UploadContainer from './upload/upload_container';

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
}

const _redirectIfNotLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (!currentUser) {
    replace('/login');
  }
}

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={App} >
          <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={AuthFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/profile" component={ProfilePageContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/feed" component={FeedContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/upload" component={UploadContainer} onEnter={_redirectIfNotLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
