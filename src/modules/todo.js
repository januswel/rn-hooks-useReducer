const ADD = 'todo/add'
const COMPLETE = 'todo/complete'
const UNDO = 'todo/undo'

const generateKey = src => `src${new Date().getTime()}`

export default (state, action) => {
  switch (action.type) {
    case ADD: {
      if (!action.payload.action) {
        return state
      }
      return [...state, {
        key: generateKey(action.payload.action),
        action: action.payload.action,
        isDone: false,
      }]
    }
    case COMPLETE: {
      return state.map((todo, index) => (index === action.payload.index ?  {
        key: todo.key,
        action: todo.action,
        isDone: true,
      } : todo))
    }
    case UNDO: {
      return state.map((todo, index) => (index === action.payload.index ?  {
        key: todo.key,
        action: todo.action,
        isDone: false,
      } : todo))
    }
    default:
      return state
  }
}

export const add = action => ({
  type: ADD,
  payload: {
    action,
  },
})

export const complete = index => ({
  type: COMPLETE,
  payload: {
    index,
  },
})

export const undo = index => ({
  type: UNDO,
  payload: {
    index,
  },
})
