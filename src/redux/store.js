import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { initialState} from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers

// combine reducers
const reducers = combineReducers({
});

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

