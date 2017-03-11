import React, { Component } from 'react'
import styles from './styles.scss'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { fetchJourneys } from 'store/journeys/actions'

import JourneyCard from 'components/JourneyCard'

const mapStateToProps = ({ journeys }) => ({
  journeys: journeys.journeys
})

const mapActionCreators = {
  fetchJourneys
}

@connect(mapStateToProps, mapActionCreators)
@CSSModules(styles, { allowMultiple: true })
export default class JourneyList extends Component {
  componentWillMount() {
    const { journeys, fetchJourneys } = this.props
    if (!journeys.length) fetchJourneys()
  }

  render() {
    const { journeys } = this.props

    return (
      <div styleName='container'>
        {journeys.map(journey =>
          <JourneyCard journey={journey} key={journey.id} />
        )}
      </div>
    )
  }
}
