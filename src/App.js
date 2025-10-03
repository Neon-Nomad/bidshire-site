import { useState, useEffect } from 'react'
import LoadingSpinner from './components/LoadingSpinner.js'
import HamburgerMenu from './components/Layout/HamburgerMenu.js'
import FullScreenMenu from './components/Layout/FullScreenMenu.js'
import Hero from './components/Hero.js'
import ProblemSection from './components/ProblemSection.js'
import HowItWorks from './components/HowItWorks.js'
import CTA from './components/CTA.js'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return React.createElement(LoadingSpinner)
  }

  return React.createElement('div', { className: 'app' }, [
    React.createElement(HamburgerMenu, {
      key: 'hamburger',
      onMenuToggle: () => setIsMenuOpen(true)
    }),
    React.createElement(FullScreenMenu, {
      key: 'fullmenu',
      isOpen: isMenuOpen,
      onClose: () => setIsMenuOpen(false)
    }),
    React.createElement('main', { key: 'main' }, [
      React.createElement(Hero, { key: 'hero' }),
      React.createElement(ProblemSection, { key: 'problem' }),
      React.createElement(HowItWorks, { key: 'howitworks' }),
      React.createElement(CTA, { key: 'cta' })
    ])
  ])
}

export default App
