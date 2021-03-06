import moment from 'moment'

export function formatDistance(distance) {
  if (distance < 1000) return `${distance} m`
  return (distance / 1000).toFixed(1) + ' km'
}

export function formatDuration(duration) {
  return moment.duration(duration, 'seconds').minutes() + ' biking minutes'
}

export function mapsLink(lat, lng) {
  return `http://maps.google.com/maps?t=m&q=${lat}+${lng}`
}
