import React from 'react'
import './CTA.css'

const CTA = () => {
  return React.createElement(
    'section',
    { className: 'final-cta', id: 'contact' },
    [
      React.createElement('h2', { key: 'title' }, 'Don\'t Get Shired'),
      React.createElement(
        'p',
        { key: 'desc' },
        'One paperwork error can cost you the project. Let GateKeeper™ be your safety net.'
      ),
      React.createElement(
        'button',
        { className: 'cta-button secondary', key: 'button' },
        'Start Your Free Scan'
      )
    ]
  )
}

export default CTA
