import React from 'react'

// import Q from 'q'
// import AppConfig from '../config.js'
import * as FirebaseHelper from '../firebase/index.js'

import firebase from 'firebase'
// TODO FIX
export default class UserNav extends React.Component {
  constructor () {
    super()

    this.state = {user: null, isLoggedIn: false}
  }

  loginWithFacebook () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken
      this.setState({user: result.user, isLoggedIn: true})
// save token in userdb
    }.bind(this))
  };

  logOut () {
    firebase.auth().signOut().then(function () {
      this.setState({user: null, isLoggedIn: false})
    }.bind(this))
  };

  render () {
    const currentState = this.state

    return (

      <div>
        { FirebaseHelper.listData.toString() }
        <p>Hi! {currentState.isLoggedIn ? currentState.user.displayName : ''}</p>
        <button onClick={this.loginWithFacebook.bind(this)}>Login with Facebook</button><button onClick={this.logOut.bind(this)}>Log Out</button>
      </div>
    )
  };
}

var provider = new firebase.auth.FacebookAuthProvider()
