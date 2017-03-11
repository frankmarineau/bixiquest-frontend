import React from 'react'
import { IndexLink, Link } from 'react-router'
import InlineSVG from 'svg-inline-react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

export const JourneySummary = ({ journey: { name, author, distance, duration, rating } }) => (
  <div styleName='container'>
    <h2 styleName='name'>{name}</h2>
    <p styleName='author'>Created by <em>{author}</em></p>
    <div styleName='statistics'>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_star_rate_black_18px.svg')} raw styleName='logo' />
        <div>{rating}</div>
      </div>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_directions_bike_black_18px.svg')} raw styleName='logo' />
        <div>{distance} km</div>
      </div>
      <div styleName='statistic'>
        <InlineSVG src={require('./ic_access_time_black_18px.svg')} raw styleName='logo' />
        <div>{duration} m</div>
      </div>
    </div>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneySummary)
