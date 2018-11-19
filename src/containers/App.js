import React, { createContext } from 'react'
import {
  useReducer,
  useContext,
} from 'react'
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

export const appContext = createContext({})
const { Provider } = appContext

function WrappedApp() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Provider value={{state, dispatch}}>
      <App />
    </Provider>
  )
}

export default WrappedApp
