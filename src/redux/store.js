import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import * as autoin from './actions/autoin';
import * as interaction from './actions/interaction';
const middleware = [thunk];
const initialState = {};
const composeEnhancers = composeWithDevTools({
  interaction,
  trace: true,
  traceLimit: 25
});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
