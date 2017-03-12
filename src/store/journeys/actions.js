import { createAction } from 'redux-actions'
import * as API from './endpoints'

export const fetchJourneys = createAction('fetch journeys', () => async dispatch => {
  const coords = [45.507066, -73.561207]
  const { journeys } = await API.list(coords)
  dispatch(setJourneys(journeys))
})

export const fetchJourney = createAction('fetch journey', (id) => async dispatch => {
  const { journey } = await API.get(id)
  dispatch(setCurrentJourney(journey))
})

export const setJourneys = createAction('set journeys')
export const setCurrentJourney = createAction('set current journey')
