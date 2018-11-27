import { fromJS } from 'immutable';
// store erisimini kısıtlamak icin immutabledan faydalanıldı.

import {
  TV_SHOW_FETCHING,
  TV_SHOW_FETCH_SUCCESS,
  TV_SHOW_FETCH_FAILURE,
} from 'constants/serviceConstants';

export const initialState = fromJS({
  test: '',
  index: 0,
  // ---
  loading: false,
});

export default (state = initialState, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION': {
    return state.merge({
      result: action.payload
    });
  }

  case 'TOGGLE_TODO': {
    const { index} = action;
    return state.merge({
        index,
    });
  }
  case 'DENEME_ACTION': {
    const { key, value } = action;
    const tampState = state.toJS();
    tampState[key] = value;
    return state.merge({
      ...tampState,
    });
  }

  // -------
  case TV_SHOW_FETCHING: {
    return state.merge({
      loading: true,
    });
  }
  case TV_SHOW_FETCH_SUCCESS: {
    const { key, response } = action;
    const tampState = state.toJS();
    tampState[key] = response;
    // reducer dolayısıyla aksiyonları daha dinamik hale getirmek icin !
    // bu study case de pek gerekli olmasada her zaman daha fazla kolaylık saglayacaktır
    return state.merge({
      ...tampState,
      loading: false,
    });
  }
  case TV_SHOW_FETCH_FAILURE: {
    const { error } = action;
    return state.merge({
      error,
      loading: false,
    });
  }
  default:
   return state
 }
}
