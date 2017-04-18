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

- `GET /api/users/:user_id/songs/:song_id`
  - Shows specific song page
  - Songs nested under user in routes
- `POST /api/users/:user_id/songs`
- `PATCH /api/users/:user_id/songs/:song_id`
- `DELETE /api/users/:user_id/songs/:song_id`

### Feed

- `GET /api/users/:id/feed`
  - Shows feeds from artists user is following

### Tags (if I get here)

- `GET /api/users/:user_id/songs/:song_id/tags`
  - Gets tags applied to specific song
- `POST /api/users/:user_id/songs/:song_id/tags`
