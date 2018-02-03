import { createStore } from 'redux'
import reducers from './reducers'

const callReducer = (type, data) => store.dispatch({type, data})

const actions = {}

actions.getImages = async imageKeyword => {
  callReducer('updateImages', imageKeyword)
}

actions.addTodo = async text => {
  return { type: 'ADD_TODO', text }
}

export const store = createStore(reducers)

export const callAction = (action, data) => {
  const actionFn = actions[action]
  if (!actionFn || typeof actionFn !== 'function') callReducer(action, data)
  else actionFn(data)
}
