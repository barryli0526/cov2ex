import * as ActionType from '../Constants'

const BASE_URL = 'http://127.0.0.1:3001/api'

const received = (type, json) => {
  switch (type) {
    case ActionType.TOPICS:
      return {
        type: type,
        payload: json
      }
    default:
      return {}
  }
}

export const fetchTopics = () => dispatch => {
  let url = `${BASE_URL}/latest`  
  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(received(ActionType.TOPICS, json)))
}
