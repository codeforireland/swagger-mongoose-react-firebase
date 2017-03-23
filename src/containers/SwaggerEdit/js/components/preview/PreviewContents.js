import React from 'react'
import ErrorComponent from './ErrorComponent.js'
import ApiComponent from './ApiComponent.js'

const defaultProps = {
  error: null,
  api: null
}

export default class PreviewContents extends React.Component {
  render () {
    let error = null
    if (this.props.error) {
      error = <ErrorComponent title={this.props.error.name} description={this.props.error.message} />
    }

    let api = null
    if (this.props.api) {
      api = <ApiComponent {...this.props.api} />
    }

    return (
      <div>
        {error}
        {api}
      </div>
    )
  }
}

PreviewContents.defaultProps = defaultProps
