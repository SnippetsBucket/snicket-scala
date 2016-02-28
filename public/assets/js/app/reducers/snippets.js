import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
  error: false,
  previewHtml: ''
};

function snippets(state = initialState, action = null) {
  switch (action.type) {
    case types.RECEIVE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });

    case types.RECIEVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data.list,
        error: false
      });

    case types.RECEIVE_SUCCESS:
      return Object.assign({}, state, {
        error: false
      });

    case types.REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });

    case types.POST_DATA:
      return Object.assign({}, state, {
        items: [action.snippet, ...state.items]
      });

    case types.FETCHED_ITEM:
      return Object.assign({}, state, {
        item: action.data
      });

    case types.CHANGE_PREVIEW:
      return Object.assign({}, state, {
        previewHtml: action.data
      });

    default:
      return state;
  }
}

export default snippets;
