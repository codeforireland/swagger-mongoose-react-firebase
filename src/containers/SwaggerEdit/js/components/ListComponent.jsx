import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import _ from 'lodash'
import firebase from 'firebase'
import Item from './Item'
// TODO Fix
export default class ItemList extends Component {
  getItemsByUser (userid) {
    const itemsRef = firebase.database().ref('/swagger/')
    itemsRef.once('value').then((snapshot) => {
      const filteredItems = _.filter(snapshot.val(), item => {
        return item.uid === userid
      })
      this.renderItems(filteredItems)
    }, (error) => {
        // The Promise was rejected.
      console.error(error)
    })
  }

  renderItems (filteredItems) {
    return filteredItems.map((item) => {
      console.log(item.name)
      return <Item name={item.name} userid={item.uid} />
    })
  }
  render () {
    return (
      <ScrollView style={{ backgroundColor: '#333', flex: 1 }}>
        {this.getItemsByUser('')}
      </ScrollView>
    )
  }
}
