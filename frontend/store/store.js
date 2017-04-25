import {createStore, applyMiddleware} from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';
import Logger from 'redux-logger';

function configureStore(preloadedState = {}){
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, Logger)
  );
}

export default configureStore;
