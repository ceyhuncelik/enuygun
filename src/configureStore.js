import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import serviceReducer from 'reducers/serviceReducer';

const store = createStore(
  combineReducers({ serviceReducer }),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
export default function configureStore(initialState={}) {
 // return createStore(
 //   combineReducers({ serviceReducer }),
 //   applyMiddleware(thunk)
 // );
 return store;
}
