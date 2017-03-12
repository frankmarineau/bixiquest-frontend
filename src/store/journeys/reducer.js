import { setJourneys, setCurrentJourney } from './actions'

const ACTION_HANDLERS = {
  [setJourneys]: (state, action) => ({
    journeys: action.payload
  }),
  [setCurrentJourney]: (state, action) => ({
    currentJourney: action.payload
  })
}

const initialState = {
  journeys: [],
  currentJourney: null
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
