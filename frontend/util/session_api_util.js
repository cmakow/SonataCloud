export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
    dataType: 'JSON'
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
    dataType: 'JSON'
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
