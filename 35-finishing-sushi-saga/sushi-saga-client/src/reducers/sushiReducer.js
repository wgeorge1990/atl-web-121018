const initialState = {
  menu: [],
  offset: 0
}

const sushiReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_SUSHI': {
      return { ...oldState, menu: action.sushi }
    }
    case 'MORE_SUSHI': {
      let newOffset = (oldState.offset + 4) % oldState.menu.length
      return { ...oldState, offset: newOffset }
    }
    default: {
      return oldState
    }
  }
}

export default sushiReducer
