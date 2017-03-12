import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps'
import mapStyle from './mapStyle'
import { flatten } from 'lodash'

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
          styles: mapStyle
        }}
      >
        {steps.map((step, i) => (
          <Marker
            key={step.id}
            position={{ lat: step.bixiStation.pos.coordinates[1], lng: step.bixiStation.pos.coordinates[0] }}
            icon={{
              url: '/marker.png',
              anchor: { x: 15, y: 15 }
            }}
            label={{
              text: String(i + 1),
              color: '#fff',
              fontWeight: 'bold'
            }}
          />
        ))}

        {flatten(steps.map(s => s.places)).map(place => (
          <Marker
            key={place.id}
            position={{ lat: place.place.geometry.location.lat, lng: place.place.geometry.location.lng }}
            icon={{
              url: '/marker_a.png',
              anchor: { x: 7, y: 7 }
            }}
          />
        ))}

        <Polyline
          path={overviewPath.map(p => ({ lat: p[0], lng: p[1] }))}
          options={{ strokeColor: '#472f92', strokeWeight: 5 }}
        />
      </GoogleMap>
    )
  }
}
export default withGoogleMap(JourneyMap)
