import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App/App'
import Home from './Home/Home'
import About from './About/About'
import Location from './Location/Location'
// TODO if ADMIN
// import MongooseReact from './MongooseReact/handlers/demoForm.js'
// import SwaggerEdit from './SwaggerEdit/js/components/AppComponent.js'

/**
 * The React Router routes for both the server and the client.
 *     // <Route path='/admin/mongoosereact' component={MongooseReact} />
      <Route path='/admin/swaggeredit' component={SwaggerEdit} />

 */
module.exports = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/location' component={Location} />
    </Route>
  </Router>
)
