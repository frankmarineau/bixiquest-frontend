import React from 'react'
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps'

const JourneyMap = ({ journey }) => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: journey.steps[0].station.pos[0], lng: journey.steps[0].station.pos[1] }}
  >
    {journey.steps.map((step, i) => (
      <Marker
        key={step.id}
        position={{ lat: step.station.pos[0], lng: step.station.pos[1] }}
        label={String(i + 1)}
      />
    ))}

    <Polyline path={journey.steps.map(s => ({ lat: s.station.pos[0], lng: s.station.pos[1] }))} />
  </GoogleMap>
)

export default withGoogleMap(JourneyMap)
