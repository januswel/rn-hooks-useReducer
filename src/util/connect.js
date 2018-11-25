import React, { useContext } from 'react'
import appContext from './app-context'

const isFunction = target => typeof target === 'function'

export default ({mapStateToProps, mapDispatchToProps}) => {
  const store = useContext(appContext)
  const stateProps = isFunction(mapStateToProps)
    ? mapStateToProps(store.getState())
    : null
  const dispatchProps = isFunction(mapDispatchToProps)
    ? mapDispatchToProps(store.dispatch)
    : null

  return <children {...stateProps} {...dispatchProps} />
}
