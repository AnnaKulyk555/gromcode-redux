import React from 'react';
import { connect } from 'react-redux';

import Filter from './Filter';
import User from './User';
import { filterUsers } from './users.actions';
import { filteredUsersListSelector, filterTextSelector } from './users.selectors';

const UsersList = ({ filterText, usersList, onFilterUsers }) => (
  <div>
    <Filter filterText={filterText} count={usersList.length} onChange={onFilterUsers} />
    <ul className="users">
      {usersList.map(user => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  </div>
);

const mapState = state => ({
  filterText: filterTextSelector(state),
  usersList: filteredUsersListSelector(state),
});

const mapDispatch = {
  onFilterUsers: filterUsers,
};

export default connect(mapState, mapDispatch)(UsersList);
