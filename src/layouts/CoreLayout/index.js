import React from 'react'
import Header from 'components/Header'
import styles from './styles.scss'
import CSSModules from 'react-css-modules'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div styleName='viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CSSModules(styles, { allowMultiple: true })(CoreLayout)
