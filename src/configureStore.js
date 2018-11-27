import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import serviceReducer from 'reducers/serviceReducer';

export default function configureStore(initialState={}) {
 return createStore(
   combineReducers({ serviceReducer }),
   applyMiddleware(thunk)
 );
}
