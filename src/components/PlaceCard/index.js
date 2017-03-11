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
    </div>
    <p styleName='description'>{description}</p>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(PlaceCard)
