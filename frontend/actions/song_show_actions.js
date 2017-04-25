import * as APIUtil from '../util/song_api_util';
import { hashHistory } from 'react-router';

export const deleteSong = id => dispatch => (
  APIUtil.deleteSong(id).then(() => hashHistory.push('/'))
);
