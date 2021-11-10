const initialState = { userList: [] };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };
    case 'DELETE':
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
};
