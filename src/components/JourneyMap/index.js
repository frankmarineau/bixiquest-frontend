import React from 'react'
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps'

const onMapLoad = steps => map => {
  const stepCoords = steps.map(step =>
    new google.maps.LatLng(step.station.pos[0], step.station.pos[1])
  )
  const bounds = new google.maps.LatLngBounds()

  stepCoords.forEach(coord => {
    bounds.extend(coord)
  })

  map.fitBounds(bounds)
}

const JourneyMap = ({ journey: { steps } }) => (
  <GoogleMap
    ref={onMapLoad(steps)}
    defaultZoom={13}
    defaultCenter={{ lat: steps[0].station.pos[0], lng: steps[0].station.pos[1] }}
    scrollwheel={false}
    draggable={false}
    navigationControl={false}
    mapTypeControl={false}
    scaleControl={false}
  >
    {steps.map((step, i) => (
      <Marker
        key={step.id}
        position={{ lat: step.station.pos[0], lng: step.station.pos[1] }}
        label={String(i + 1)}
      />
    ))}

    <Polyline path={steps.map(s => ({ lat: s.station.pos[0], lng: s.station.pos[1] }))} />
  </GoogleMap>
)

export default withGoogleMap(JourneyMap)
