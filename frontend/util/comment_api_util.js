export const fetchUserComments = user_id => (
  $.ajax({
    url: `/api/users/${user_id}/comments`
  })
);

export const fetchSongComments = song_id => (
  $.ajax({
    url: `/api/songs/${song_id}/comments`
  })
);

export const postComment = comment => (
  $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: comment,
    processData: false,
    contentType: false,
    dataType: 'json'
  })
);

export const updateComment = comment => (
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'PATCH',
    data: comment
  })
);

export const deleteComment = comment_id => (
  $.ajax({
    url: `/api/comments/${comment_id}`,
    method: 'DELETE'
  })
);
