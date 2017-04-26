import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongIndexReducer from './song_index_reducer';
import CurrentSongReducer from './current_song_reducer';
import EditSongReducer from './edit_song_reducer';
import UploadSongReducer from './upload_song_reducer';
import ProfileReducer from './profile_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongIndexReducer,
  currentSong: CurrentSongReducer,
  edit: EditSongReducer,
  upload: UploadSongReducer,
  profile: ProfileReducer,
  comment: CommentReducer
});

export default rootReducer;
