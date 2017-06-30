import * as ActionType from '../Constants'

const Topics = (state = {}, action) => {  
  switch (action.type) {
    case ActionType.TOPICS:    
      return {
        type: action.type,
        payload: action.payload
      }
    default:
      return state
  }
}

export default Topics
