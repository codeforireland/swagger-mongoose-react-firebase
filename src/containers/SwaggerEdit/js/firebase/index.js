import firebase from 'firebase'
import Q from 'q'
import AppConfig from '../config.js'

export const configure = () => {
  const deferred = Q.defer()

  firebase.initializeApp(AppConfig.firebase)

  deferred.resolve()

  return deferred.promise
}

export const saveData = (id, value) => {
  const deferred = Q.defer()

  const database = firebase.database()

  database.ref('swagger/' + id)
.set({
  value: value
})
.then(() => {
  deferred.resolve()
})

  return deferred.promise
}

export const listData = () => {
  const deferred = Q.defer()
  const database = firebase.database()
  database.ref('/swagger')
.on(value)
.then(() => {
  deferred.resolve()
})

  return deferred.promise
}
