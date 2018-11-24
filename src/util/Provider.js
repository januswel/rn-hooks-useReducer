import React from 'react'
import appContext from './app-context'

const { Provider } = appContext

export default props => (
  <Provider value={props.store}>
    {props.children}
  </Provider>
)
