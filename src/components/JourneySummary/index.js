import React from 'react'
import InlineSVG from 'svg-inline-react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'
import { formatDistance, formatDuration } from 'utils'

export const JourneySummary = ({ journey: { name, author, distance, duration } }) => (
  <div styleName='container'>
    <h2 styleName='name'>{name}</h2>
    <p styleName='author'>Created by <em>{author}</em></p>
    <div styleName='statistics'>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_star_rate_black_18px.svg')} raw styleName='icon' />
        <div>{distance % 3 + 3 + '' + (duration % 7 + 3)}</div>
      </div>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_directions_bike_black_18px.svg')} raw styleName='icon' />
        <div>{formatDistance(distance)}</div>
      </div>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_access_time_black_18px.svg')} raw styleName='icon' />
        <div>{formatDuration(duration)}</div>
      </div>
    </div>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneySummary)
