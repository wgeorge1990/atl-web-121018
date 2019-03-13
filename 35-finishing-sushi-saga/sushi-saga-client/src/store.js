import { createStore, combineReducers } from 'redux';
import sushiReducer from './reducers/sushiReducer'
import eatenReducer from './reducers/eatenReducer'

const rootReducer = combineReducers({
  sushi: sushiReducer,
  eaten: eatenReducer
})

export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
