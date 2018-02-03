import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux-state'
import { Provider } from 'react-redux'
import HelloMessage from './components/hello-message'

ReactDOM.render(
  <Provider store={store}>
    <HelloMessage />
  </Provider>,
 document.getElementById('root'))
