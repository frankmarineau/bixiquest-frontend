import React, { Component } from 'react'
import styles from './styles.scss'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { fetchJourney } from 'store/journeys/actions'
import { journeyFromUrl } from 'store/journeys/selectors'

import JourneyMap from 'components/JourneyMap'
import JourneySummary from 'components/JourneySummary'
import JourneyStep from 'components/JourneyStep'

const mapStateToProps = (state, props) => ({
  journey: state.journeys.currentJourney
})

const mapActionCreators = {
  fetchJourney
}

@connect(mapStateToProps, mapActionCreators)
@CSSModules(styles, { allowMultiple: true })
export default class JourneyDetails extends Component {
  componentWillMount() {
    const { fetchJourney, journey } = this.props
    if (!journey || journey.id !== this.props.params.journeyId) fetchJourney(this.props.params.journeyId)
  }

  render() {
    const { journey } = this.props
    if (!journey) return null
    if (journey.id !== this.props.params.journeyId) return null

    return (
      <div>
        <JourneyMap
          journey={journey}
          containerElement={
            <div style={{ height: `350px` }} />
          }
          mapElement={
            <div style={{ height: `350px` }} />
          }
        />
        <JourneySummary journey={journey} />

        {journey.steps.map((step, index) =>
          <JourneyStep key={step.id} step={step} isFirst={index === 0} stepNumber={index + 1} />
        )}

        <p styleName='the-end'>The End</p>
      </div>
    )
  }
}
