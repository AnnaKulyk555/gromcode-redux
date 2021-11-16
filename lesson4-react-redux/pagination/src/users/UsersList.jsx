import React from 'react';
import { connect } from 'react-redux';

import Pagination from './Pagination';
import User from './User';
import * as usersActions from '../store/users.actions';

const ITEMS_PER_PAGE = 3;

const UsersList = ({ currentPage, users, incrementPage, decrementPage }) => {
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goPrev={decrementPage}
        goNext={incrementPage}
        totalItems={users.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />

      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  currentPage: state.users.currentPage,
  users: state.users.usersList,
});

const mapDispatch = {
  incrementPage: usersActions.incrementPage,
  decrementPage: usersActions.decrementPage,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
