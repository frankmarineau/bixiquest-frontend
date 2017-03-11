import { combineReducers } from 'redux'
import location from './location'
import counter from './counter/reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    counter,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
