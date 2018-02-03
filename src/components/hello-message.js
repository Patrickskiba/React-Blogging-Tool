import React from 'react'
import { callAction } from '../redux-state'
import { connect } from 'react-redux'

export const TheComponent = ({todos}) => {
  return <div className='container'>
    <div className='row'>
      <h1>Hello World</h1>
      <button onClick={firstButton}> Test</button >
      <button onClick={secondButton}> Not a test </button>
    </div>
    {getItemText(todos)}
  </div>
}
const firstButton = (e) => { callAction('ADD_TODO', 'This is a test') }

const secondButton = (e) => { callAction('ADD_TODO', 'This is not a test') }

const getItemText = (todos) => { return Object.keys(todos).map(item => { return <div> {todos[item].text} </div> }) }

const mapStateToProps = (state) => { return state.todoApp }

export default connect(s => (mapStateToProps(s)))(TheComponent)
