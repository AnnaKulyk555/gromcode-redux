import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as usersActions from './users.actions';

class SearchField extends React.Component {
  state = {
    userName: '',
  };

  onChange = event => {
    this.setState({ userName: event.target.value });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
  };

  render() {
    return (
      <div className="name-form">
        <input type="text" className="name-form__input" onChange={this.onChange} />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SearchField);
