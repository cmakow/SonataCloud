export const fetchUserSongs = (artist_id, offset) => (
  $.ajax({
    url: `/api/users/${artist_id}/songs`,
    data: { artist_id, offset }
  })
);

export const fetchSongs = (offset) => (
  $.ajax({
    url: `/api/songs/`,
    data: { offset }
  })
);

export const fetchMatchingSongs = (input) => (
  $.ajax({
    url: `/api/songs`,
    data: { input }
  })
);

export const fetchSong = (id) => (
  $.ajax({
    url: `/api/songs/${id}`
  })
);

export const deleteSong = (id) => (
  $.ajax({
    url: `/api/songs/${id}`,
    method: 'DELETE'
  })
);

export const createSong = (song) => (
  $.ajax({
    url: '/api/songs',
    method: 'POST',
    data: song,
    processData: false,
    contentType: false,
    dataType: 'json'
  })
);

export const updateSong = (song) => (
  $.ajax({
    url: `/api/songs/${song.id}`,
    method: 'PATCH',
    data: song,
    processData: false,
    contentType: false,
    dataType: 'json'
  })
);
