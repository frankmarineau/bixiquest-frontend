import React from 'react'
import styles from './styles.scss'
import InlineSVG from 'svg-inline-react'
import CSSModules from 'react-css-modules'

const apiKey = 'AIzaSyBWiwTUyFu39GNW8i_z9JZ6kHC8bpmRgcU'

const makeImageUrl = photoReference => (
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`
)

export const PlaceCard = ({ place: { place: { name, photos, url }, description } }) => (
  <div styleName='container' onClick={() => window.location = url}>
    <div styleName='header'>
      <div style={{ backgroundImage: `url(${makeImageUrl(photos[0].photo_reference)})` }} styleName='thumbnail' />
      <h3 styleName='name'>{name}</h3>
      <InlineSVG src={require('./ic_keyboard_arrow_right_black_24px.svg')} raw styleName='click-arrow' />
    </div>
    <blockquote styleName='description'>{description}</blockquote>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(PlaceCard)
