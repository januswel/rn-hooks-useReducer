import React, { useContext } from 'react'

import appContext from '../util/app-context'
import TodoForm from '../components/TodoForm'
import { add } from '../modules/todo'

const mapDispatchToProps = dispatch => ({
  actions: {
    add: action => dispatch(add(action)),
  },
})

export default () => {
  const store = useContext(appContext)

  return (
    <TodoForm
      {...mapDispatchToProps(store.dispatch)}
    />
  )
}
