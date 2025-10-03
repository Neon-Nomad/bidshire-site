import { useState, useEffect } from 'react'
import LoadingSpinner from './components/LoadingSpinner'
import HamburgerMenu from './components/Layout/HamburgerMenu'
import FullScreenMenu from './components/Layout/FullScreenMenu'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
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
