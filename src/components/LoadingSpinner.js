import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return React.createElement(
    'div',
    { className: 'loading-container' },
    [
      React.createElement(
        'div',
        { className: 'document-spinner', key: 'spinner' },
        [
          React.createElement('div', { className: 'document-page', key: 'page' }),
          React.createElement('div', { className: 'document-icon', key: 'icon' }, '📋')
        ]
      ),
      React.createElement(
        'div',
        { className: 'loading-text', key: 'text' },
        'Initializing GateKeeper™'
      )
    ]
  )
}

export default LoadingSpinner
