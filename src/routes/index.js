import CoreLayout from '../layouts/CoreLayout'
import Home from 'views/Home'
import { toAsync } from './AsyncComponent'

export default store => ({
  path: '/',
  component: CoreLayout,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'counter',
      component: toAsync(() => import('views/Counter'))
    }
  ]
})
