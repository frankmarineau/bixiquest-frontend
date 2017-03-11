import CoreLayout from '../layouts/CoreLayout'
import { toAsync } from './AsyncComponent'

export default store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: {
    component: toAsync(() => import('views/JourneyList'))
  },
  childRoutes: [
    {
      path: '/journeys/:journeyId',
      component: toAsync(() => import('views/JourneyDetails'))
    }
  ]
})
