import { combineReducers } from 'redux'

const initialState = {
  todos: [
    {
      text: 'Yes',
      completed: false
    }
  ]
}

const todoApp = (state = initialState, text = 'No Text') => {
  if (text.data == null) return state
  return Object.assign({ todos: [...state.todos, { text: text.data, completed: false }] })
}

export default combineReducers({todoApp})
