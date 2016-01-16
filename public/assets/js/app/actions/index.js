import axios from 'axios';
//import { pushState } from 'redux-router';

import * as types from '../constants/ActionTypes';

function requestData() {
  return { type: types.REQUEST_DATA };
}

function receiveData(json) {
  return {
    type: types.RECIEVE_DATA,
    data: json
  };
}

function receiveError(json) {
  return {
    type: types.RECEIVE_ERROR,
    data: json
  };
}

function receiveSuccess(json) {
  return {
    type: types.RECEIVE_SUCCESS,
    data: json
  };
}

export function fetchData(url) {
  return dispatch => {
    dispatch(requestData());

    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    .then(res => {
      dispatch(receiveData(res.data));
    })
    .catch(res => {
      dispatch(receiveError(res.data));
      //dispatch(pushState(null, '/error'));
    });
  };
};


function addSnippet(json) {
  return {
    type: types.POST_DATA,
    data: json
  };
}

export function postData(url, snippet) {
  return dispatch => {
    dispatch(addSnippet(snippet));

    return axios({
      url: url,
      timeout: 20000,
      method: 'post',
      data: snippet
    })
    .then(res => {
      dispatch(receiveSuccess(res.data));
      console.log('post success');
      console.log(res.data.code);
      // FIXME: don't redirect to root
      if (res.data.code == 0) {
        console.log('0だったよ');
        this.context.router.replaceRoutes('/');
      }
    })
    .catch(res => {
      dispatch(receiveError(res.data));
      console.log('error');
      //dispatch(pushState(null, '/error'));
    });
  };
};