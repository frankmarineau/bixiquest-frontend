import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps'

class JourneyMap extends Component {
  onMapLoad = map => {
    if (!map) return
    const stepCoords = this.props.journey.steps.map(step =>
      new google.maps.LatLng(step.bixiStation.pos.coordinates[1], step.bixiStation.pos.coordinates[0])
    )
    const bounds = new google.maps.LatLngBounds()

    stepCoords.forEach(coord => {
      bounds.extend(coord)
    })

    map.fitBounds(bounds)
  }

  render() {
    const { steps, overviewPath } = this.props.journey

    return (
      <GoogleMap
        ref={this.onMapLoad}
        defaultZoom={13}
        defaultCenter={{ lat: steps[0].bixiStation.pos.coordinates[1], lng: steps[0].bixiStation.pos.coordinates[0] }}
        options={{
          scrollwheel: false,
          draggable: false,
          navigationContro: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          clickableIcons: false,
          disableDoubleClickZoom: false,
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {steps.map((step, i) => (
          <Marker
            key={step.id}
            position={{ lat: step.bixiStation.pos.coordinates[1], lng: step.bixiStation.pos.coordinates[0] }}
            label={String(i + 1)}
          />
        ))}

        <Polyline
          path={overviewPath.map(p => ({ lat: p[0], lng: p[1] }))}
        />
      </GoogleMap>
    )
  }
}
export default withGoogleMap(JourneyMap)
