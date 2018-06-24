import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import auth from './reducers/auth';
import goal from './reducers/goal';

// root saga
import rootSaga from './saga';
const reducers = combineReducers({
  auth,
  goal
});

const sagaMiddleware = createSagaMiddleware();
// We actually need to be able to change the store if it's Dev
// Environemnt, ignore next line.
// eslint-disable-next-line import/no-mutable-exports
let store = createStore(reducers, applyMiddleware(ReduxThunk, sagaMiddleware));

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = composeWithDevTools({});
  store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(ReduxThunk, sagaMiddleware))
  );
}

sagaMiddleware.run(rootSaga);

export default store;
