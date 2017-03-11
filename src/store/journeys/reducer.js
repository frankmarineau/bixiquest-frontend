import { setJourneys } from './actions'

const ACTION_HANDLERS = {
  [setJourneys]: (state, action) => ({
    journeys: action.payload
  })
}

const initialState = {
  journeys: []
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
