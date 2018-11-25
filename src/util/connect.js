import React from 'react'

import appContext from './app-context'

const { Consumer } = appContext
const isFunction = target => typeof target === 'function'
const defualtMapStateToProps = () => ({})
const defualtMapDispatchToProps = () => ({})

export default (originalMapStateToProps, originalMapDispatchToProps) => {
  const mapStateToProps = isFunction(originalMapStateToProps)
    ? originalMapStateToProps
    : defualtMapStateToProps
  const mapDispatchToProps = isFunction(originalMapDispatchToProps)
    ? originalMapDispatchToProps
    : defualtMapDispatchToProps

  return Component => () => (
    <Consumer>
      {store => (
        <Component
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      )}
    </Consumer>
  )
}
