import React, { createContext } from 'react'
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

export const context = createContext({})
const { Provider } = context

function WrappedApp() {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState)

  return (
    <Provider value={{state, dispatch}}>
      <App />
    </Provider>
  )
}

export default WrappedApp
