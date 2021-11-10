export const addUser = userData => ({
  type: 'ADD',
  payload: userData,
});

export const deleteUser = id => ({
  type: 'DELETE',
  payload: id,
});
