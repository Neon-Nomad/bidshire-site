import React from 'react'
import './ProblemSection.css'

const ProblemSection = () => {
  const problems = [
    {
      icon: '❌',
      title: 'Missed Addenda',
      description: 'Automatic disqualification for missing a single page published hours before deadline.'
    },
    {
      icon: '📝',
      title: 'Signature Issues',
      description: 'Wrong page signed, missing notary, unauthorized signer - all grounds for rejection.'
    },
    {
      icon: '🏗️',
      title: 'Subcontractor Forms',
      description: 'Your bid is only as strong as your weakest sub\'s paperwork.'
    },
    {
      icon: '⏰',
      title: 'Last-Minute Rush',
      description: '30 minutes before submission is no time to find missing documents.'
    }
  ]

  return React.createElement(
    'section',
    { className: 'problem-section', id: 'problem' },
    [
      React.createElement('h2', { key: 'title' }, 'Focus on What Matters: The Bid'),
      React.createElement(
        'div',
        { className: 'problem-grid', key: 'grid' },
        problems.map((problem, index) =>
          React.createElement(
            'div',
            { className: 'problem-card', key: index },
            [
              React.createElement('h3', { key: 'title' }, `${problem.icon} ${problem.title}`),
              React.createElement('p', { key: 'desc' }, problem.description)
            ]
          )
        )
      )
    ]
  )
}

export default ProblemSection
