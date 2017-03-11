import { increment, double } from './actions'

const ACTION_HANDLERS = {
  [increment]: (state, action) => state + action.payload,
  [double]: (state, action) => state * 2
}

const initialState = 0

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
