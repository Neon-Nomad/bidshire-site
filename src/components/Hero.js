import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return React.createElement(
    'section',
    { className: 'hero', id: 'hero' },
    [
      React.createElement('h1', { key: 'title' }, 'Your Compliance Safety Net'),
      React.createElement(
        'div',
        { className: 'hero-subtitle', key: 'subtitle' },
        'Stop getting disqualified for paperwork errors'
      ),
      React.createElement(
        'div',
        { className: 'tagline', key: 'tagline' },
        'Propping up your estimator. One document at a time.'
      ),
      React.createElement(
        'button',
        {
          key: 'cta',
          className: 'cta-button',
          onClick: () => scrollToSection('solution')
        },
        'Secure Your Bid Now'
      )
    ]
  )
}

export default Hero
