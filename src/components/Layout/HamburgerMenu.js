import React from 'react'
import './HamburgerMenu.css'

const HamburgerMenu = ({ onMenuToggle }) => {
  return React.createElement(
    'div',
    {
      className: 'hamburger-menu',
      onClick: onMenuToggle
    },
    [
      React.createElement('div', { className: 'hamburger-line', key: 'line1' }),
      React.createElement('div', { className: 'hamburger-line', key: 'line2' }),
      React.createElement('div', { className: 'hamburger-line', key: 'line3' })
    ]
  )
}

export default HamburgerMenu
