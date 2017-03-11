import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={styles.active}>
      Counter
    </Link>
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(Header)
