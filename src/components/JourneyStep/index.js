import React from 'react'
import InlineSVG from 'svg-inline-react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'
import { formatDistance } from 'utils'

import PlaceCard from 'components/PlaceCard'

export const JourneyStep = ({ step: { places, distance, bixiStation }, isFirst, stepNumber }) => (
  <div styleName='container'>
    <div styleName='travel'>
      <h1 styleName='step-number'>{stepNumber}</h1>
      <div styleName='icon-container'>
        <InlineSVG
          src={require(
            isFirst ? './ic_directions_walk_black_24px.svg' : './ic_directions_bike_black_18px.svg'
          )}
          raw
          styleName='icon'
        />
      </div>
      <p styleName='distance'>{distance && formatDistance(distance.value)} to <a styleName='station' href='#'>{bixiStation.name}</a></p>
    </div>

    {places.map(place =>
      <PlaceCard key={place.id} place={place} />
    )}
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneyStep)
