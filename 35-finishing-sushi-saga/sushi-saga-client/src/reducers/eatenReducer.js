const initialState = {
  budget: 100,
  list: []
}

const eatenReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'EAT_SUSHI': {
      if (action.price < oldState.budget) {
        let newBudget = oldState.budget - action.price
        let newEaten = oldState.list.concat(action.id)
        return { ...oldState, budget: newBudget, list: newEaten }
      } else {
        return oldState
      }
    }
    default: {
      return oldState
    }
  }
}

export default eatenReducer
