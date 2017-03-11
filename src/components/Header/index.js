import React from 'react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

export const Header = () => (
  <div styleName='container'>
    <Link to='/'>
      <img src={require('./logo.png')} styleName='logo' />
    </Link>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(Header)
