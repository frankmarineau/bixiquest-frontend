import React, { Component } from 'react'
import styles from './styles.scss'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { fetchJourneys } from 'store/journeys/actions'
import { journeyFromUrl } from 'store/journeys/selectors'

import JourneyMap from 'components/JourneyMap'
import JourneySummary from 'components/JourneySummary'
import JourneyStep from 'components/JourneyStep'

const mapStateToProps = (state, props) => ({
  journey: journeyFromUrl(state, props),
  journeyCount: state.journeys.journeys.length
})

const mapActionCreators = {
  fetchJourneys
}

@connect(mapStateToProps, mapActionCreators)
class JourneyDetails extends Component {
  componentWillMount() {
    const { journeyCount, fetchJourneys } = this.props
    if (!journeyCount) fetchJourneys()
  }

  render() {
    const { journey, journeyCount } = this.props
    if (!journeyCount) return null

    return (
      <div>
        <JourneyMap
          journey={journey}
          containerElement={
            <div style={{ height: `400px` }} />
          }
          mapElement={
            <div style={{ height: `400px` }} />
          }
        />
        <JourneySummary journey={journey} />

        {journey.steps.map((step, index) =>
          <JourneyStep key={step.id} step={step} isFirst={index === 0} stepNumber={index+1} />
        )}
      </div>
    )
  }
}

export default CSSModules(styles, { allowMultiple: true })(JourneyDetails)
