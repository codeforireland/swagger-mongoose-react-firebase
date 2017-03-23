import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({  // i18n strings for this component - https://goo.gl/abldHf
  navHome: {
    id: 'nav.home',
    defaultMessage: 'Home'
  },
  navAbout: {
    id: 'nav.about',
    defaultMessage: 'About'
  },
  navLocation: {
    id: 'nav.location',
    defaultMessage: 'Location'
  }

})

export const Msg = (props) => <FormattedMessage {...messages[ props.s ]} values={props.values} />
