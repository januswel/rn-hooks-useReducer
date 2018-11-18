import { useReducer } from 'react'
import todoReducer from './modules/todo'

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

const [state, dispatch] = useReducer(todoReducer, todoInitialState)

export default {
  state,
  dispatch,
}
