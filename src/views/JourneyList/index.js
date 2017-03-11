import React, { Component } from 'react'
import styles from './styles.scss'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { fetchJourneys } from 'store/journeys/actions'
import { Link } from 'react-router'

const mapStateToProps = ({ journeys }) => ({
  journeys: journeys.journeys
})

const mapActionCreators = {
  fetchJourneys
}

@connect(mapStateToProps, mapActionCreators)
class JourneyList extends Component {
  componentWillMount() {
    const { journeys, fetchJourneys } = this.props
    if (!journeys.length) fetchJourneys()
  }

  render() {
    const { journeys } = this.props

    return (
      <div>
        <h4>Journeys</h4>
        {journeys.map(journey =>
          <ul key={journey.id}>
            <li><Link to={`/journeys/${journey.id}`}>{journey.name}</Link></li>
          </ul>
        )}
      </div>
    )
  }
}

export default CSSModules(styles, { allowMultiple: true })(JourneyList)
