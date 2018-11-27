
import { fromJS } from 'immutable';

export const initialState = fromJS({
  test: '',
  index: 0,
});

export default (state = initialState, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION': {
    return state.merge({
      result: action.payload
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

  case 'TOGGLE_TODO': {
    const { index} = action;
    return state.merge({
        index,
    });
  }
  default:
   return state
 }
}
