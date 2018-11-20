import React, { createContext } from 'react'
import { useReducer } from 'react'

import appContext from '../app-context'
import reducer from '../modules'
import App from '../components/App'

const initialState = [
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

const { Provider } = appContext

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Provider value={{state, dispatch}}>
      <App />
    </Provider>
  )
}
