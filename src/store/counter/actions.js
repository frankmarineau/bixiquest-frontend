import { createAction } from 'redux-actions'

export const increment = createAction('increment counter')
export const double = createAction('double counter')

export const doubleAsync = createAction('start timer to double counter', () => (dispatch, getState) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch(double())
      resolve()
    }, 200)
  })
})
