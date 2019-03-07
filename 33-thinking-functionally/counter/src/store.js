import { createStore } from 'redux';

const initialState = {
  count: -10
}

const rootReducer = (oldState=initialState, action) => {
  console.log("oldstate is", oldState)
  console.log("action is", action)
  switch (action.type) {
    case "INCREMENT": {
      return { ...oldState, count: oldState.count + action.amount }
    }
    case "DECREMENT": {
      return { ...oldState, count: oldState.count - action.amount }
    }
    default: {
      return oldState
    }
  }
}

export default createStore(rootReducer);
