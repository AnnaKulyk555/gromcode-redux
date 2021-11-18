export const FILTER_USERS = 'USERS/FILTER_USERS';

export const filterUsers = filterText => ({
  type: FILTER_USERS,
  payload: {
    filterText,
  },
});
