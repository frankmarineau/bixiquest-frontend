import React from 'react'
import InlineSVG from 'svg-inline-react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'
import { formatDistance } from 'utils'

import PlaceCard from 'components/PlaceCard'
import MuralCard from 'components/MuralCard'

export const JourneyStep = ({ step: { murals, places, distance, bixiStation }, isFirst, stepNumber }) => (
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
      <p styleName='distance'>{formatDistance(distance)} to <a styleName='station' href='#'>{bixiStation.name}</a></p>
    </div>

    {places.map(place =>
      <PlaceCard key={place.id} place={place} />
    )}

    {murals.slice(stepNumber % murals.length, (stepNumber + 1) % murals.length).map(mural =>
      <MuralCard key={mural.id} mural={mural} />
    )}
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(JourneyStep)
