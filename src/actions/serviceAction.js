import {
  TV_SHOW_FETCHING,
  TV_SHOW_FETCH_SUCCESS,
  TV_SHOW_FETCH_FAILURE,
} from 'constants/serviceConstants';

export const simpleAction = () => dispatch => {
 dispatch({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
 })
}


export function toggleTodo(index) {
  return { type: 'TOGGLE_TODO', index };
}

export function denemeAction(key, value) {
  return {
    type: 'DENEME_ACTION',
    key,
    value,
  };
}


// ---
export function tvShowsFetching() {
  return {
    type: TV_SHOW_FETCHING,
  };
}
export function tvShowFetchSuccess(key, response) {
  return {
    type: TV_SHOW_FETCH_SUCCESS,
    key,
    response,
  };
}
export function tvShowFetchFailure(error) {
  return {
    type: TV_SHOW_FETCH_FAILURE,
    error,
  };
}
