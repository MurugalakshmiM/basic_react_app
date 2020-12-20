import * as actionTypes from '../actionTypes/actionTypes'

const reducer_1 = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_API:
      console.log(action.payload)
      return action.payload
    case 'DELETE':
      const newState = state.filter((data, index) => index !== action.index)
      return newState
    case 'ADD':
      const addedList = [action.data,...state]
      return addedList
    default:
      return state
  }
}

export default reducer_1
