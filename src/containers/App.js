import React, { createContext } from 'react'
import { useReducer } from 'react'

import appContext from '../app-context'
import reducer from '../modules'
import App from '../components/App'
import initialState from '../initial-state'

const { Provider } = appContext

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Provider value={{state, dispatch}}>
      <App />
    </Provider>
  )
}
