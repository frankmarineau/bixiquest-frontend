import React from 'react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'
import InlineSVG from 'svg-inline-react'
import { flatten, uniq } from 'lodash'
import { formatDistance, formatDuration } from 'utils'

const stepIcons = steps => uniq(flatten(steps.map(step =>
  step.places.map(place => place.place.icon)
)))

export const JourneyCardSummary = ({ journey: { name, rating, distance, duration, steps } }) => (
  <div styleName='container'>
    <h3 styleName='name'>{name}</h3>
    <div styleName='statistics'>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_star_rate_black_18px.svg')} raw styleName='logo' />
        <div>{distance % 3 + 3 + '.' + (duration % 7 + 3) + 'k'}</div>
      </div>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_directions_bike_black_18px.svg')} raw styleName='logo' />
        <div>{formatDistance(distance)}</div>
      </div>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_access_time_black_18px.svg')} raw styleName='logo' />
        <div>{formatDuration(duration)}</div>
      </div>
    </div>
    <div styleName='icon-container'>
      {stepIcons(steps).map((icon, index) =>
        <img key={index} styleName='icon' src={icon} />
      )}
    </div>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneyCardSummary)
