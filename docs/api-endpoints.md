# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/albums/:album_id/songs`
  - Get album songs
- `GET /api/playlists/:playlist_id/songs`
  - Get playlist songs
- `GET /api/users/:user_id/songs`
  - Get artist songs
- `GET /api/users/:user_id/songs/:song_id`
  - Shows specific song page
  - Songs nested under user in routes
- `POST /api/songs`
  - Gets current user for user id
- `PATCH /api/songs/:song_id`
- `DELETE /api/songs/:song_id`

### Comments

- `GET /api/songs/:song_id/comments`
  - Get comments on a song
- `GET /api/users/:user_id/comments`
  - Shows all user comments
  - Used for user show page to show recent comments
- `GET /api/users/:user_id/comments/:comment_id`
- `POST /api/comments`
- `PATCH /api/comments/:comment_id`
- `DELETE /api/comments/:comment_id`

### Albums

- `GET /api/albums/:album_id`
- `POST /api/albums`
- `PATCH /api/albums/:album_id`
- `DELETE /api/albums/:album_id`

### Playlists

- `GET /api/playlists/:playlist_id`
- `GET /api/users/:user_id/playlists`
  - Get user playlists for user page
- `GET /api/playlists`
  - Get all playlists for popular playlist item potentially
- `POST /api/playlists`
- `PATCH /api/playlists/:playlist_id`
- `DELETE /api/playlists/:playlist_id`

### Playlist-songs

- `GET /api/playlists/:playlist_id/playlist-songs`
  - Get all songs listed under playlist
- `POST /api/playlists/:playlist_id/playlist-songs`

### Feed

- `GET /api/users/:id/feed`
  - Shows feeds from artists user is following

### Tags (if I get here)

- `GET /api/users/:user_id/songs/:song_id/tags`
  - Gets tags applied to specific song
- `POST /api/users/:user_id/songs/:song_id/tags`
