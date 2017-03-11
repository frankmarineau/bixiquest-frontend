import React from 'react'
import { Link } from 'react-router'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

import JourneyMap from 'components/JourneyMap'
import JourneyCardSummary from 'components/JourneyCardSummary'

export const JourneyCard = ({ journey }) => (
  <Link to={`/journeys/${journey.id}`} styleName='container'>
    <JourneyMap
      journey={journey}
      containerElement={
        <div style={{ height: `200px`, width: '100%' }} />
      }
      mapElement={
        <div style={{ height: `200px`, width: '100%' }} />
      }
    />
    <JourneyCardSummary journey={journey} />
  </Link>
)

export default CSSModules(styles, { allowMultiple: true })(JourneyCard)
