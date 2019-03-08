import { createStore } from 'redux';

const initialState = {
  sushi: [],
  budget: 100,
  eaten: []
}

const rootReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_SUSHI': {
      return { ...oldState, sushi: action.sushi }
    }
    default: {
      return oldState
    }
  }
}

export default createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
