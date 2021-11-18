import { createSelector } from 'reselect';

export const filterTextSelector = state => state.users.filterText;

export const usersListSelector = state => state.users.usersList;

export const filteredUsersListSelector = createSelector(
  [filterTextSelector, usersListSelector],
  (filterText, usersList) =>
    usersList.filter(user => user.name.toUpperCase().includes(filterText.toUpperCase())),
);
