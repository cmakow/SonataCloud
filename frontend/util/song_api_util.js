export const fetchUserSongs = (id) => (
  $.ajax({
    url: `/api/users/${id}/songs`
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
