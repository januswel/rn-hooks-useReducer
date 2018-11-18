import React from 'react'
import {
  useReducer,
  useContext,
} from 'react'
import todoReducer from '../modules/todo'
import App from '../components/App'

const todoInitialState = [
  {
    action: 'Remember the milk',
    isDone: true,
    key: `Remember the milk${new Date().getTime()}`,
  },
  {
    action: 'Use useReducer',
    isDone: false,
    key: `Use useReducer${new Date().getTime()}`,
  },
]

function WrappedApp() {
  const [store, dispatch] = useReducer(todoReducer, todoInitialState)
  this.store = store
  this.dispatch = dispatch

  return (
    <App store={store} />
  )
}

export default WrappedApp
