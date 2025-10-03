import React from 'react'
import './FullScreenMenu.css'

const FullScreenMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'The Problem', href: '#problem' },
    { label: 'GateKeeper™', href: '#solution' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Get Started', href: '#contact' }
  ]

  const handleMenuItemClick = () => {
    onClose()
  }

  if (!isOpen) return null

  return React.createElement(
    'div',
    { className: 'full-menu active' },
    [
      React.createElement(
        'button',
        {
          key: 'close',
          className: 'close-menu',
          onClick: onClose
        },
        '✕'
      ),
      ...menuItems.map((item, index) =>
        React.createElement(
          'a',
          {
            key: index,
            href: item.href,
            className: 'menu-item',
            onClick: handleMenuItemClick
          },
          item.label
        )
      )
    ]
  )
}

export default FullScreenMenu
