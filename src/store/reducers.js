import { combineReducers } from 'redux'
import location from './location'
import counter from './counter/reducer'
import journeys from './journeys/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    counter,
    journeys,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
