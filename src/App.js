import React from 'react'

import Home from './components/Home'
import useStore from './util/use-store'
import Provider from './util/Provider'
import reducer from './modules'
import initialState from './initial-state'

export default () => {
  const store = useStore(reducer, initialState)

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
