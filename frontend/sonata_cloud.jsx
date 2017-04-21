import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receiveCurrentSong } from './actions/current_song_actions';

window.receiveCurrentSong = receiveCurrentSong;

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState;
    if(window.currentUser) {
      preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    }
    const store = configureStore(preloadedState);
    window.store = store; // debugging purposes
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
