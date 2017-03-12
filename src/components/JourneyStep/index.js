import React from 'react'
import { IndexLink, Link } from 'react-router'
import InlineSVG from 'svg-inline-react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

import PlaceCard from 'components/PlaceCard'

export const JourneyStep = ({ step: { places, distance, station }, isFirst, stepNumber }) => (
  <div>
    <div styleName='travel'>
      <h1 styleName='step-number'>{stepNumber}</h1>
      <InlineSVG src={require(
        isFirst ? './ic_directions_walk_black_24px.svg' : './ic_directions_bike_black_18px.svg' 
        )} raw styleName='icon' />
      <p styleName='distance'>{distance} m to <a styleName='station' href='#'>{station.name}</a></p>
    </div>

    {places.map(place =>
      <PlaceCard key={place.id} place={place} />
    )}
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneyStep)
