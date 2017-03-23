import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({  // i18n strings for this component - https://goo.gl/abldHf
  viewTimeline: {
    id: 'timeline.view',
    defaultMessage: '(click to view Timeline)'
  }
})

export const Msg = (props) => <FormattedMessage {...messages[ props.s ]} values={props.values} />
