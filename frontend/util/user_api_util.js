export const fetchUser = id => {
  return $.ajax({
    method: 'get',
    url: `/api/user/${id}`
  });
};
