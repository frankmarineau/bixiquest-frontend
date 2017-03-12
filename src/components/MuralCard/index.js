import React from 'react'
import styles from './styles.scss'
import InlineSVG from 'svg-inline-react'
import CSSModules from 'react-css-modules'

export const MuralCard = ({ mural: { artist, imageUrl } }) => (
  <div styleName='container' style={{backgroundImage: `url(${imageUrl})`}}>
    <p styleName='presentation'>Nearby mural</p>
    <div>
      <InlineSVG src={require('./ic_keyboard_arrow_right_black_24px.svg')} raw styleName='click-arrow' />
    </div>
    <p styleName='artist'>{artist}</p>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(MuralCard)
