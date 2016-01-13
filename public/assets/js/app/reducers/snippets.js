import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
  error: false
};

function snippets(state = initialState, action = null) {
  switch (action.type) {
    case types.RECEIVE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data.list,
        error: true
      });

    case types.RECIEVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data.list,
        error: false
      });

    case types.REQ_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });

    default:
      return state;
  }
}

export default snippets;
