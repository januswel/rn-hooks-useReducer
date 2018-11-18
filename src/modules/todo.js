const ADD = 'todo/add'
const COMPLETE = 'todo/complete'
const UNDO = 'todo/undo'

const generateKey = src => `src${new Date().getTime()}`

export default (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        key: generateKey(action.payload.action),
        action: action.payload.action,
        isDone: false,
      }]
    case COMPLETE: {
      const { index } = action.payload
      const target = state[index]
      taret.isDone = true
      return [
        ...state.slice(0, index - 1),
        target,
        ...state.slice(index + 1, state.length - 1)
      ]
    }
    case UNDO: {
      const { index } = action.payload
      const target = state[index]
      taret.isDone = false
      return [
        ...state.slice(0, index - 1),
        target,
        ...state.slice(index + 1, state.length - 1)
      ]
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
