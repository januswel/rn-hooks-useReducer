import React, { useContext } from 'react'

import appContext from '../util/app-context'
import Todos from '../components/Todos'
import { complete, undo } from '../modules/todo'

const mapStateToProps = state => ({
  todos: state,
})
const mapDispatchToProps = dispatch => ({
  actions: {
    complete: index => dispatch(complete(index)),
    undo: index => dispatch(undo(index)),
  },
})

export default () => {
  const store = useContext(appContext)

  return (
    <Todos
      {...mapStateToProps(store.getState())}
      {...mapDispatchToProps(store.dispatch)}
    />
  )
}
