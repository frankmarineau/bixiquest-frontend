import React from 'react'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

const Home = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      styleName='image'
      src={require('./duck.jpg')} />
  </div>
)

export default CSSModules(styles, { allowMultiple: true })(Home)
