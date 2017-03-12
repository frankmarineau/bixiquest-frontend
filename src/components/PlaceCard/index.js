import React from 'react'
import { IndexLink, Link } from 'react-router'
import InlineSVG from 'svg-inline-react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

export const PlaceCard = ({ place: { name, image_url, description } }) => (
  <div styleName='container'>
    <div styleName='header'>
      <div style={{backgroundImage: `url(${image_url})`}} styleName='thumbnail'/>
      <h3 styleName='name'>{name}</h3>
      <InlineSVG src={require('./ic_keyboard_arrow_right_black_24px.svg')} raw styleName='click-arrow' />
    </div>
    <blockquote styleName='description'>{description}</blockquote>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(PlaceCard)
