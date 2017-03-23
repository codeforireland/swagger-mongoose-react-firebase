import React from 'react';
// import ReactDOM from 'react-dom';
import Location from 'react-place';

// import { ButtonGroup, Button } from 'react-bootstrap'

import { Msg } from './messages'
// import css from './Home.css'

export default class About extends React.Component {



onLocationSet = (data) => {
    alert( data.description + ' lat: ' +  data.coords.lat + ' long: ' + data.coords.lng)
};

  render () {
    return (
    <Location
    country='IE'
    noMatching='Sorry, I can not find {{value}}.'
    onLocationSet={this.onLocationSet}
    inputProps={{
    style: {
        color: '#0099FF'
    },
    className: 'location',
    placeholder: 'Where are your?'
}}/>
    )
  }
}