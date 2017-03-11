import React from 'react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

export const JourneyCardSummary = ({ journey }) => (
  <div styleName='container'>
    <h3 styleName='name'>{journey.name}</h3>
    <h4>{journey.distance}km - {journey.duration}m</h4>
    <div>
      {journey.steps.map(step =>
        step.places.map(place =>
          <span styleName='type'>{place.type}</span>
        )
      )}
    </div>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneyCardSummary)
