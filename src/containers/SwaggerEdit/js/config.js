require('dotenv-safe').load({
  allowEmptyValues: true,
  sample: '/sample.env'
})
const AppConfig = {
  firebase: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    storageBucket: process.env.storageBucket
  },
  dev: true
}

export default AppConfig
