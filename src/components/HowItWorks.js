import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Upload Your Bid Package',
      description: 'Drag and drop your complete submission package - we handle PDFs, Word docs, images, and ZIP files.'
    },
    {
      number: 2,
      title: 'AI-Powered Compliance Scan',
      description: 'Our system performs 25+ checks in minutes: addenda acknowledgement, bonds, signatures, required forms, and more.'
    },
    {
      number: 3,
      title: 'Get Your Evidence Binder',
      description: 'Receive timestamped, visual proof of compliance. See exactly what passed and what needs fixing.'
    },
    {
      number: 4,
      title: 'Submit With Confidence',
      description: 'Fix any issues and submit knowing your bid is 100% compliant. No surprises.'
    }
  ]

  return React.createElement(
    'section',
    { className: 'how-it-works', id: 'solution' },
    [
      React.createElement('h2', { key: 'title' }, 'How GateKeeper™ Works'),
      React.createElement(
        'div',
        { className: 'steps', key: 'steps' },
        steps.map((step) =>
          React.createElement(
            'div',
            { className: 'step', key: step.number },
            [
              React.createElement(
                'div',
                { className: 'step-number', key: 'number' },
                step.number
              ),
              React.createElement(
                'div',
                { key: 'content' },
                [
                  React.createElement('h3', { key: 'title' }, step.title),
                  React.createElement('p', { key: 'desc' }, step.description)
                ]
              )
            ]
          )
        )
      )
    ]
  )
}

export default HowItWorks
