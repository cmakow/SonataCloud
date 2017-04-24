import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import SongIndexReducer from './song_index_reducer';
import CurrentSongReducer from './current_song_reducer';
import EditSongReducer from './edit_song_reducer';
import UploadSongReducer from './upload_song_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  songs: SongIndexReducer,
  currentSong: CurrentSongReducer,
  edit: EditSongReducer,
  upload: UploadSongReducer
});

export default rootReducer;
