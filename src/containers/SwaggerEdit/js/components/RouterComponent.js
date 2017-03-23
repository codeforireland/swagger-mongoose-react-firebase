import React from 'react'
import { Router, Route, hashHistory } from 'react-router' // Redirect,

import AppComponent from './AppComponent.js'
import NotFoundComponent from './NotFoundComponent.js'

export default class RouterComponent extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/swagger/:documentId' component={AppComponent} />
        <Route path='/swagger/' component={AppComponent} />
        <Route path='/' component={AppComponent} />
        <Route path='*' component={NotFoundComponent} />
      </Router>
    )
  }
}
