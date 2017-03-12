import { createSelector } from 'reselect'

const journeys = state => state.journeys.journeys
const journeyIdFromUrl = (_, props) => props.params.journeyId

export const journeyFromUrl = createSelector(
  journeys,
  journeyIdFromUrl,
  (journeys, journeyIdFromUrl) => journeys.find(j => j.id === journeyIdFromUrl)
)
