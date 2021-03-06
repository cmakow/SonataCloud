import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthFormContainer from './auth_form/auth_form_container';
import ProfilePageContainer from './profile_page/profile_page_container';
import FeedContainer from './feed/feed_container';
import UploadContainer from './upload/upload_container';
import EditContainer from './edit_form/edit_form_container';
import SongContainer from './song/song_container';
import ProfileEditContainer from './profile_edit/profile_edit_container';
import HomePage from './home_page/home_page';


const Root = ({store}) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/feed');
    }
  }

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  const _redirectIfNotArtist = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    const editedSongArtist = store.getState().edit.editedSong.artist;
    if (currentUser.id !== editedSongArtist.id ) {
      replace('/feed');
    }
  }
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={App} >
          <IndexRoute component={HomePage} onEnter={_redirectIfLoggedIn} />
          <Route path="/login" component={AuthFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={AuthFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/profile/:user_id" component={ProfilePageContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/profile-edit" component={ProfileEditContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/feed" component={FeedContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/upload" component={UploadContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/edit/:id" component={EditContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path="/songs/:song_id" component={SongContainer} onEnter={_redirectIfNotLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
