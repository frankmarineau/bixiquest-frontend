import React, { PropTypes } from 'react'

export default class AsyncComponent extends React.Component {
  state = {
    Component: null
  }

  async componentDidMount() {
    const { default: Component } = await this.props._loader()
    this.setState({ Component })
  }

  render() {
    const { Component } = this.state
    if (Component) return <Component {...this.props} />
    return <div>Loading...</div>
  }
}

AsyncComponent.propTypes = {
  _loader: PropTypes.func.isRequired // Underscored to prevent overriding user props
}

export const toAsync = loader => props => <AsyncComponent {...props} _loader={loader} />
