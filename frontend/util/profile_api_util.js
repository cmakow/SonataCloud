export const fetchUser = id => (
  $.ajax({
    url: `/api/users/${id}`
  })
);

export const updateUser = user => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user },
    processData: false,
    contentType: false,
    dataType: 'json'
  })
);
